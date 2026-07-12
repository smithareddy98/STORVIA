import { Upload, ShieldCheck, Cloud } from "lucide-react";

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="text-center">

        <h2 className="text-5xl font-bold">
          Why Choose STORVIA?
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Store your memories with speed, security and simplicity.
        </p>

      </div>

      <div className="grid grid-cols-3 gap-8 mt-16">

        <div className="rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">

          <Upload size={50} className="text-blue-600"/>

          <h3 className="text-2xl font-bold mt-6">
            Fast Upload
          </h3>

          <p className="text-gray-600 mt-4">
            Upload photos, videos and documents in seconds.
          </p>

        </div>

        <div className="rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">

          <ShieldCheck size={50} className="text-green-600"/>

          <h3 className="text-2xl font-bold mt-6">
            Secure Storage
          </h3>

          <p className="text-gray-600 mt-4">
            Your files remain protected and private.
          </p>

        </div>

        <div className="rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">

          <Cloud size={50} className="text-sky-600"/>

          <h3 className="text-2xl font-bold mt-6">
            Access Anywhere
          </h3>

          <p className="text-gray-600 mt-4">
            Open your files anytime from any device.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;