import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl translate-x-24 translate-y-24"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 lg:py-36">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              🚀 Secure • Fast • Reliable
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-8">
              Store Your Files
              <br />
              <span className="text-cyan-300">
                Anytime,
              </span>
              <br />
              Anywhere.
            </h1>

            <p className="mt-8 text-lg text-blue-100 max-w-xl leading-8">
              Storvia is your personal cloud storage platform where you can
              upload, organize, and access your files securely from anywhere.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/register"
                className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition"
              >
                Login
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

              <h2 className="text-2xl font-bold text-gray-800">
                ☁️ STORVIA
              </h2>

              <p className="text-gray-500 mt-2">
                Personal Cloud Dashboard
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <span>📷 Photos</span>
                  <span className="font-bold text-blue-600">128</span>
                </div>

                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <span>📄 Documents</span>
                  <span className="font-bold text-purple-600">52</span>
                </div>

                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <span>🎥 Videos</span>
                  <span className="font-bold text-pink-600">14</span>
                </div>

              </div>

              <div className="mt-8">

                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Storage Used</span>
                  <span>7.8 GB / 15 GB</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full w-[52%]"></div>

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