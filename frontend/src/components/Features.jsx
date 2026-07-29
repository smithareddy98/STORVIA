import {
  Cloud,
  ShieldCheck,
  Zap,
  Smartphone,
  FolderOpen,
  Database,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Cloud size={38} />,
      title: "Cloud Storage",
      description:
        "Upload and access your files securely from anywhere in the world.",
    },
    {
      icon: <ShieldCheck size={38} />,
      title: "Secure Authentication",
      description:
        "JWT authentication keeps your account and files protected.",
    },
    {
      icon: <Zap size={38} />,
      title: "Lightning Fast",
      description:
        "Optimized uploads and downloads for a seamless experience.",
    },
    {
      icon: <Smartphone size={38} />,
      title: "Responsive Design",
      description:
        "Beautiful experience across desktop, tablet and mobile devices.",
    },
    {
      icon: <FolderOpen size={38} />,
      title: "Easy File Management",
      description:
        "Organize, preview and delete your files effortlessly.",
    },
    {
      icon: <Database size={38} />,
      title: "Powered by Modern Tech",
      description:
        "Built using React, Express, MongoDB, Cloudinary and JWT.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-white to-slate-100 py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold tracking-widest uppercase">
            Features
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Storvia combines security, speed and simplicity to make cloud
            storage effortless for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-slate-100"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;