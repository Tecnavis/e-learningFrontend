import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, User, Mail, Lock, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useAddNewUserMutation } from "@/app/service/userData";
import logo from "../../../public/2.png";
import auth_image from "../../../public/auth.jpeg";

export default function SignUp() {
  const [addNewUser, { isLoading: isPosting }] = useAddNewUserMutation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    standard: "",
    district: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addNewUser(formData);

      if (response?.data?.status == 201) {
        setFormData({
          name: "",
          email: "",
          password: "",
          standard: "",
          district: "",
          phone: ""
        });

        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Failed to add discussion:", error);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="flex w-full flex-col lg:flex-row">
        {/* Form section */}
        <motion.div
          className="flex w-full items-center justify-center p-8 lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto w-full max-w-md space-y-8">
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="mb-4 flex justify-center">
                <img
                  src={logo}
                  alt="App Logo"
                  className="h-16 w-auto sm:h-20"
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white">
                Create Account
              </h1>
              <p className="mt-2 text-gray-400">
                Join us today and start your learning journey
              </p>
            </motion.div>

            <motion.form
              className="mt-8 space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-4 rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="border-gray-700 bg-gray-800 pl-10 text-white"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="border-gray-700 bg-gray-800 pl-10 text-white"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="border-gray-700 bg-gray-800 pl-10 text-white"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="phone"
                      placeholder="+91 000000"
                      className="border-gray-700 bg-gray-800 pl-10 text-white"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="standard" className="text-white">
                      Class
                    </Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="standard"
                        name="standard"
                        placeholder="Your class"
                        className="border-gray-700 bg-gray-800 pl-10 text-white"
                        value={formData.standard}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="district" className="text-white">
                      District
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="district"
                        name="district"
                        placeholder="Your district"
                        className="border-gray-700 bg-gray-800 pl-10 text-white"
                        value={formData.district}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="group relative w-full bg-purple-600 hover:bg-purple-700"
              >
                {isPosting ? "Creating..." : "Create Account"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div
                type="submit"
                className="group text-sm text-center relative w-full  text-gray-400"
              >
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/sign-in")}
                  className="text-purple-400 hover:text-purple-300 cursor-pointer"
                >
                  Sign in
                </span>
              </div>
            </motion.form>
          </div>
        </motion.div>

        {/* Company image section */}
        <motion.div
          className="relative hidden w-full bg-blue-600 lg:block lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <img
            src={auth_image}
            alt="Company Image"
            className="object-cover h-full w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <motion.h2
              className="mb-2 text-3xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Join Our Community
            </motion.h2>
            <motion.p
              className="text-lg opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Create an account to get started with our services
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
