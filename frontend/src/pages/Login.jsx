import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center px-6">

      <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <div className="text-center">

          <div className="text-6xl">
            ☁️
          </div>

          <h1 className="text-4xl font-bold text-white mt-4">
            Welcome Back
          </h1>

          <p className="text-blue-100 mt-2">
            Sign in to continue to Storvia
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6 mt-10"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl px-5 py-4 bg-white/20 text-white placeholder-white/70 outline-none border border-white/20"
            required
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-2xl px-5 py-4 bg-white/20 text-white placeholder-white/70 outline-none border border-white/20"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-4 text-white"
            >
              {showPassword ? "🙈" : "👁"}
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-700 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Sign In
          </button>

        </form>

        <p className="text-center text-white mt-8">

          Don't have an account?

          <Link
            to="/register"
            className="font-bold ml-2 underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;