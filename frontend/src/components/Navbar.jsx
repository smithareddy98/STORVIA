import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      
      <div className="w-[90%] mx-auto">
        
        <div className="flex items-center justify-between py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              ☁
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">
                STORVIA
              </h1>

              <p className="text-xs text-gray-500">
                Secure Cloud Storage
              </p>
            </div>

          </Link>


          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">

            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link to="/features" className="hover:text-blue-600 transition">
              Features
            </Link>

            <Link to="/dashboard" className="hover:text-blue-600 transition">
              Dashboard
            </Link>

            <Link to="/upload" className="hover:text-blue-600 transition">
              Upload
            </Link>

          </nav>


          {/* AUTH */}
          <div className="flex items-center gap-4">

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;