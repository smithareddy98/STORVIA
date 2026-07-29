import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-[1600px] mx-auto px-10 lg:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="mx-auto lg:mx-0 max-w-xl">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-sm">
              🚀 Trusted by Developers
            </span>

            <h1 className="mt-8 text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Store Your Files
              <br />
              Securely.
            </h1>

            <p className="mt-8 text-xl text-gray-300 leading-9 max-w-2xl">
              Storvia lets you upload, organize and access your files from
              anywhere with enterprise-grade security.
            </p>

            <div className="mt-10 flex gap-5">

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

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h2 className="text-3xl font-bold">99.9%</h2>
                <p>Uptime</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p>Files Stored</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">24/7</h2>
                <p>Availability</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold">☁️ STORVIA</h2>
            <p className="text-gray-500 mb-6">Personal Cloud Dashboard</p>

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
    </section>
  );
}

export default Hero;