import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              ☁️ STORVIA
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              A secure cloud storage platform built to upload,
              manage and access your files from anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/login"
                className="hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-white transition"
              >
                Register
              </Link>

              <Link
                to="/dashboard"
                className="hover:text-white transition"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Tech Stack
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>React</p>
              <p>Express.js</p>
              <p>MongoDB Atlas</p>
              <p>Cloudinary</p>
              <p>JWT Authentication</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2026 Storvia. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;