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
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Why Choose Storvia?
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Everything you need to securely upload, organize and access your
            files in one modern cloud storage platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
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