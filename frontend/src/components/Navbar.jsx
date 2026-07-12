import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          STORVIA
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Features
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Pricing
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-medium shadow-md"
          >
            Start Free
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;