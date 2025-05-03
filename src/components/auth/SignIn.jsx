import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/app/service/userData";
import logo from "../../../public/2.png";
import auth_image from "../../../public/auth.jpeg"

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { isLoading: isPosting }] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" && password.trim() === "") return;

    const logData = {
      email,
      password,
    };
    try {
      const response = await loginUser(logData);
      if (response?.data?.status == 200) {
        localStorage.setItem("user", JSON.stringify(response?.data));
        setEmail("");
        setPassword("");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to add discussion:", error);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
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
        {/* Left image section */}
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
              Welcome Back
            </motion.h2>
            <motion.p
              className="text-lg opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Sign in to continue your journey with us
            </motion.p>
          </div>
        </motion.div>

        {/* Right form section */}
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
                Sign In
              </h1>
              <p className="mt-2 text-gray-400">
                Enter your credentials to access your account
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
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="border-gray-700 bg-gray-800 pl-10 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      type="password"
                      placeholder="••••••••"
                      className="border-gray-700 bg-gray-800 pl-10 text-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    {/* <Link to="#" className="text-blue-400 hover:text-blue-300">
                      Forgot your password?
                    </Link> */}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="group relative w-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
              >
                {isPosting ? "Sign in ...." : "Sign in"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div
                type="submit"
                className="group relative w-full text-center text-sm text-gray-400 cursor-pointer"
              >
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => navigate("/sign-up")}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  Sign up
                </span>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
