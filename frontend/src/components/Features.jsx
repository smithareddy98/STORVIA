function Features() {
  const features = [
    {
      icon: "☁️",
      title: "Cloud Storage",
      description:
        "Securely upload and access your files anytime from anywhere.",
    },
    {
      icon: "🔒",
      title: "Secure Authentication",
      description:
        "JWT-based authentication keeps your files protected and private.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Upload, preview and manage files with high performance.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Use Storvia seamlessly on desktop, tablet and mobile devices.",
    },
    {
      icon: "🗂️",
      title: "File Management",
      description:
        "Organize, preview and delete your uploaded files with ease.",
    },
    {
      icon: "🚀",
      title: "Modern Tech Stack",
      description:
        "Built using React, Express, MongoDB, Cloudinary and JWT.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-slate-50 py-20">

      {/* MAIN CENTER CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="w-full text-center">

          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Powerful Features
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3">
            Everything You Need
          </h1>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Storvia gives you everything you need to securely store,
            manage and access your files from anywhere.
          </p>

        </div>

        {/* FEATURE CARDS */}
        <div className="w-full flex justify-center mt-16">

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-5xl">
                  {feature.icon}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-6">
                  {feature.title}
                </h2>

                <p className="text-gray-600 mt-4 leading-7">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;