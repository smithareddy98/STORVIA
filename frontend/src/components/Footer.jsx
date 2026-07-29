import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Cloud,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <Cloud size={26} />
              </div>

              <div>

                <h2 className="text-3xl font-extrabold text-white">
                  STORVIA
                </h2>

                <p className="text-slate-400 text-sm">
                  Secure Cloud Storage
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Store, organize and access your files from anywhere.
              Built with modern technologies and designed for speed,
              security and simplicity.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>

              <Link to="/register" className="hover:text-white transition">
                Register
              </Link>

              <Link to="/dashboard" className="hover:text-white transition">
                Dashboard
              </Link>

            </div>

          </div>

          {/* Tech */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Built With
            </h3>

            <div className="space-y-3">

              <p>⚛ React</p>
              <p>🚀 Express.js</p>
              <p>🍃 MongoDB Atlas</p>
              <p>☁ Cloudinary</p>
              <p>🔐 JWT Authentication</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Github size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:your@email.com"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Mail size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500">
            © 2026 Storvia. All Rights Reserved.
          </p>

          <p className="text-slate-500">
            Designed & Developed by <span className="text-white font-semibold">Sai Smitha</span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;