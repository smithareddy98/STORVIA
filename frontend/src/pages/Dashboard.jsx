import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";

function Dashboard() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await api.get("/files");
      setFiles(res.data.files);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/files/${id}`);
      fetchFiles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <p className="text-gray-600 mt-4">
          Welcome to your personal cloud storage.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {files.map((file) => (
            <div
              key={file._id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src={file.url}
                alt={file.originalName}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h2 className="font-bold text-lg break-words">
                  {file.originalName}
                </h2>

                <p className="text-gray-500 mt-2">
                  {file.fileType}
                </p>

                <p className="text-gray-500">
                  {(file.fileSize / 1024 / 1024).toFixed(2)} MB
                </p>

                <div className="flex gap-3 mt-5">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Open
                  </a>

                  <button
                    onClick={() => handleDelete(file._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;