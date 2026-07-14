import { useState } from "react";
import api from "../api/api";

function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post("/files/upload", formData);

      setMessage("✅ File Uploaded Successfully!");
      console.log(res.data);

    } catch (error) {
      console.error(error);
      setMessage("❌ Upload Failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white shadow-xl rounded-2xl p-8">

      <h1 className="text-3xl font-bold mb-8">
        Upload File
      </h1>

      <input
      type="file"
      onChange={(e) => setFile(e.target.files[0])}
      className="block w-full text-sm text-gray-700
      file:mr-4 file:py-3 file:px-6
      file:rounded-xl file:border-0
      file:bg-blue-600 file:text-white
      file:cursor-pointer
      hover:file:bg-blue-700"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Upload
      </button>

      <p className="mt-6 font-semibold">
        {message}
      </p>

    </div>
  );
}

export default Upload;