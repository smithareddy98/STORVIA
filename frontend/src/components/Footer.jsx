import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-white">
              ☁️ STORVIA
            </h2>

            <p className="mt-4 leading-7">
              A secure cloud storage platform built with React, Express,
              MongoDB and Cloudinary.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/" className="hover:text-white">
                Home
              </Link>

              <Link to="/login" className="hover:text-white">
                Login
              </Link>

              <Link to="/register" className="hover:text-white">
                Register
              </Link>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Tech Stack
            </h3>

            <p>React</p>
            <p>Express</p>
            <p>MongoDB Atlas</p>
            <p>Cloudinary</p>
            <p>JWT Authentication</p>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">

          <p>
            © 2026 Storvia. Built by Sai Smitha.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;