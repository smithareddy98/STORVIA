import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full bg-slate-900 text-white">

      <div className="w-[90%] mx-auto px-6 py-20 lg:py-28">

        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="w-full max-w-xl mx-auto">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-sm">
              🚀 Trusted by Developers
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Store Your Files
              <br />
              Securely.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9">
              Storvia lets you upload, organize and access your files from
              anywhere with enterprise-grade security.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap items-center gap-5">

              <Link
                to="/register"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Create Account
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 rounded-full text-white font-semibold hover:text-cyan-300 transition"
              >
                Login →
              </Link>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <h2 className="text-3xl font-bold">
                  99.9%
                </h2>
                <p className="text-gray-300 mt-1">
                  Uptime
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  10K+
                </h2>
                <p className="text-gray-300 mt-1">
                  Files Stored
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  24/7
                </h2>
                <p className="text-gray-300 mt-1">
                  Availability
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="w-full flex justify-center">

            <div className="bg-white text-black rounded-3xl p-8 shadow-2xl w-full max-w-lg">

              <h2 className="text-2xl font-bold">
                ☁️ STORVIA
              </h2>

              <p className="text-gray-500 mb-6">
                Personal Cloud Dashboard
              </p>

              <div className="space-y-4">

                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <span>📷 Photos</span>
                  <span>128</span>
                </div>

                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <span>📄 Documents</span>
                  <span>52</span>
                </div>

                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <span>🎥 Videos</span>
                  <span>14</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;