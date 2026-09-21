import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
  console.log("Full Error:", error);
  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);

  alert(error.response?.data?.message || "Registration Failed");
}
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            STORVIA
          </h1>

          <p className="text-gray-500 mt-3">
            Create your free account
          </p>

        </div>

        <form onSubmit={handleRegister} className="mt-10 space-y-6">

          <div>

            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;