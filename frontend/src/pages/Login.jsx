import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Cloud } from "lucide-react";
import api from "../api/api"; // Change the path if needed

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">

        {/* Left */}
        <div className="hidden lg:flex flex-col justify-center p-16 text-white bg-gradient-to-br from-blue-600 to-indigo-700">
          <Cloud size={70} />

          <h1 className="text-5xl font-black mt-8">
            Welcome Back
          </h1>

          <p className="mt-6 text-blue-100 leading-8 text-lg">
            Access your files securely from anywhere.
            Upload, organize and manage everything in one place.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              ✅ Secure Authentication
            </div>

            <div className="flex items-center gap-4">
              ☁ Cloud Storage
            </div>

            <div className="flex items-center gap-4">
              🚀 Lightning Fast Uploads
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white p-12 lg:p-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Sign In
          </h2>

          <p className="text-slate-500 mt-2">
            Login to continue using Storvia.
          </p>

          <form onSubmit={handleLogin} className="mt-10 space-y-6">

            <div className="relative">
              <Mail
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-[1.02] transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-8 text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;