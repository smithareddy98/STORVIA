import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-8 lg:px-14 py-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg">
            ☁️
          </div>

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              STORVIA
            </h1>

            <p className="text-sm text-slate-500">
              Smart Cloud Storage
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-slate-700 font-medium">

          <Link className="hover:text-blue-600 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-600 transition" to="/dashboard">
            Dashboard
          </Link>

          <Link className="hover:text-blue-600 transition" to="/upload">
            Upload
          </Link>

          <a
            href="#features"
            className="hover:text-blue-600 transition"
          >
            Features
          </a>

        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          {!token ? (
            <>
              <Link
                to="/login"
                className="font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
              >
                Get Started
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-3 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;