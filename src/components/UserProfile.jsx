import { useState } from "react";
import { motion } from "framer-motion";
import {
  Edit,
  Upload,
  Mail,
  MapPin,
  Briefcase,
  User,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateUserMutation } from "@/app/service/userData";

export default function UserProfileCard() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userData?.userDetails || {});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({...user});
  const [image, setImage] = useState(null);

  const [ updateUser, { isLoading: isPosting }] = useUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file); // store the file itself

      // If you want to preview the image
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, previewImage: imageUrl }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("standard", formData.standard);
    formDataToSend.append("district", formData.district);
  
    if (image) {
      formDataToSend.append("image", image);
    }
  
    try {
      const response = await updateUser({
        id: userData?.userDetails?._id,
        updateUser: formDataToSend,
      });
  
      console.log("Full response:", response.data); // <-- check what comes
  
      if (response?.data?.status === 200) {
        const oldData = JSON.parse(localStorage.getItem("user"));
  
        const updatedData = {
          ...oldData,
          userDetails: response.data.user, // <- corrected
        };
  
        localStorage.setItem("user", JSON.stringify(updatedData));
  
        setUser(response.data.user);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Failed to edit profile:", error);
    }
  };
  
  
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();

//     // Append fields
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("standard", formData.standard);
//     formDataToSend.append("district", formData.district);

//     console.log(image , "image");
    

//     if (image) {
//       formDataToSend.append("image", image); // Send file, not URL
//     }

//     try {
//       const response = await updateUser({ id: userData?.userDetails?._id, updateUser: formDataToSend });

//       if (response?.data?.status === 200) {
//         setUser(response.data.user.userDetails);
//         setIsEditing(false);
//       }
//     } catch (error) {
//       console.error("Failed to edit profile:", error);
//     }
//   };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl absolute top-20 md:right-11 z-30"
      >
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-violet-500 to-purple-500">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg"
            >
              <img
                src={`http://localhost:3000/images/${user?.image}` || "/placeholder.svg"}
                alt={user?.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-16 px-6 pb-6 pt-4 text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {user?.name}
          </motion.h2>

          <motion.div
            className="mt-4 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail className="h-4 w-4 text-violet-500" />
              <span>{user?.email}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Briefcase className="h-4 w-4 text-violet-500" />
              <span>Standard: {user?.standard}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4 text-violet-500" />
              <span>District: {user?.district}</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-1 cursor-pointer "
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>

            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="flex items-center gap-1 bg-violet-600 hover:bg-violet-700 cursor-pointer"
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  {/* Image Upload */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={`${import.meta.env.VITE_API_URL}/public/images/${formData.image}`} />
                        <AvatarFallback>
                          <User className="h-12 w-12" />
                        </AvatarFallback>
                      </Avatar>
                      <Label
                        htmlFor="profile-image"
                        className="absolute -bottom-2 -right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700"
                      >
                        <Upload className="h-4 w-4" />
                      </Label>
                      <Input
                        id="profile-image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="standard">Standard</Label>
                      <Input
                        id="standard"
                        name="standard"
                        value={formData.standard}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit/Cancel */}
                  <div className="flex justify-end gap-2 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          ...user
                        });
                        setImage(null);
                      }}
                      className="cursor-pointer"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-violet-600 hover:bg-violet-700 cursor-pointer"
                    >
                      {isPosting ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
