import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Navbar from "../components/Navbar";

function Upload() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    setMessage("");
    setError("");
  };

  const handleInputChange = (e) => {
    handleFileSelect(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];

    handleFileSelect(droppedFile);
  };

  const removeFile = () => {
    setFile(null);
    setMessage("");
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first.");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      setUploading(true);
      setMessage("");
      setError("");

      const res = await api.post(
        "/files/upload",
        formData
      );

      console.log(res.data);

      setMessage("File uploaded successfully!");

      setFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {
      console.error("Upload error:", error);

      setError(
        error.response?.data?.message ||
          "Upload failed. Please try again."
      );
    } finally {
      setUploading(false);
    }
  };

  const formatFileSize = (size) => {
    if (!size) return "0 KB";

    if (size < 1024) {
      return `${size} Bytes`;
    }

    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-6 py-12">

        {/* CENTER EVERYTHING */}
        <div className="w-full flex justify-center">

          <div className="w-full max-w-3xl text-center">

            {/* =========================
                HEADER
            ========================= */}

            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Cloud Storage
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Upload Your Files
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Securely upload your files to your Storvia cloud.
            </p>


            {/* =========================
                UPLOAD AREA
            ========================= */}

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() =>
                fileInputRef.current?.click()
              }
              className={`mt-10 border-2 border-dashed rounded-3xl p-12 md:p-16 text-center cursor-pointer transition ${
                isDragging
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 bg-white hover:border-blue-500 hover:bg-blue-50/30"
              }`}
            >

              <input
                ref={fileInputRef}
                type="file"
                onChange={handleInputChange}
                className="hidden"
              />

              <div className="text-6xl">
                ☁️
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-6">
                {isDragging
                  ? "Drop your file here"
                  : "Drag & drop your file here"}
              </h2>

              <p className="text-gray-500 mt-3">
                or click anywhere in this area to browse
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="mt-7 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Choose File
              </button>

            </div>


            {/* =========================
                SELECTED FILE
            ========================= */}

            {file && (
              <div className="bg-white border rounded-2xl shadow-sm p-6 mt-6 text-left">

                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-4 min-w-0">

                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">
                      📄
                    </div>

                    <div className="min-w-0">

                      <h3
                        className="font-bold text-gray-900 truncate"
                        title={file.name}
                      >
                        {file.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {formatFileSize(file.size)}
                      </p>

                    </div>

                  </div>

                  <button
                    onClick={removeFile}
                    disabled={uploading}
                    className="text-red-600 font-semibold hover:text-red-700 flex-shrink-0"
                  >
                    Remove
                  </button>

                </div>

              </div>
            )}


            {/* =========================
                UPLOAD BUTTON
            ========================= */}

            {file && (
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition disabled:opacity-60"
              >
                {uploading
                  ? "Uploading..."
                  : "Upload File"}
              </button>
            )}


            {/* =========================
                SUCCESS MESSAGE
            ========================= */}

            {message && (
              <div className="mt-6 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-center font-semibold">
                {message}
              </div>
            )}


            {/* =========================
                ERROR MESSAGE
            ========================= */}

            {error && (
              <div className="mt-6 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-center font-semibold">
                {error}
              </div>
            )}

          </div>

        </div>

      </main>
    </>
  );
}

export default Upload;