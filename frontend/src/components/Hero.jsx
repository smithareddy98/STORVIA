import { useEffect, useState } from "react";

function Hero() {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {

    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Backend not connected");
      });

  }, []);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="flex items-center justify-between gap-16">

        <div className="max-w-xl">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            {message}
          </span>

          <h1 className="text-7xl font-extrabold mt-8 leading-tight">
            Store Everything.
            <br />
            Access Anywhere.
          </h1>

          <p className="text-gray-600 text-xl mt-8 leading-9">
            Upload your photos, videos and documents securely.
            Access them from anywhere in the world.
          </p>

        </div>

        <div className="w-[450px] h-[420px] bg-blue-50 rounded-3xl shadow-xl flex items-center justify-center text-8xl">

          ☁️

        </div>

      </div>

    </section>
  );
}

export default Hero;