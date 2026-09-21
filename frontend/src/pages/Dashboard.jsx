import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Upload,
  Download,
  Trash2,
  FileText,
  Image,
  Video,
  File,
  FolderOpen,
  HardDrive,
  FileImage,
  FileVideo,
  FileArchive,
  X,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

import { Link } from "react-router-dom";
import api from "../api/api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // =========================
  // FETCH FILES
  // =========================
  const fetchFiles = async () => {
    try {
      setLoading(true);

      const res = await api.get("/files");

      setFiles(res.data.files || []);
    } catch (error) {
      console.error("Fetch files error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  // =========================
  // FILE CATEGORY
  // =========================
  const getFileCategory = (file) => {
    const type = file.fileType?.toLowerCase() || "";
    const name = file.originalName?.toLowerCase() || "";

    if (type.startsWith("image/")) {
      return "images";
    }

    if (type.startsWith("video/")) {
      return "videos";
    }

    if (
      type.includes("pdf") ||
      type.includes("word") ||
      type.includes("document") ||
      type.includes("text") ||
      type.includes("sheet") ||
      type.includes("excel") ||
      name.endsWith(".doc") ||
      name.endsWith(".docx") ||
      name.endsWith(".pdf") ||
      name.endsWith(".txt") ||
      name.endsWith(".xls") ||
      name.endsWith(".xlsx")
    ) {
      return "documents";
    }

    return "other";
  };

  // =========================
  // FILE ICON
  // =========================
  const getFileIcon = (file) => {
    const category = getFileCategory(file);

    if (category === "images") {
      return <FileImage size={28} strokeWidth={1.8} />;
    }

    if (category === "videos") {
      return <FileVideo size={28} strokeWidth={1.8} />;
    }

    if (category === "documents") {
      return <FileText size={28} strokeWidth={1.8} />;
    }

    return <FileArchive size={28} strokeWidth={1.8} />;
  };

  // =========================
  // FILE ICON STYLE
  // =========================
  const getFileIconStyle = (file) => {
    const category = getFileCategory(file);

    if (category === "images") {
      return "bg-blue-50 text-blue-600";
    }

    if (category === "videos") {
      return "bg-purple-50 text-purple-600";
    }

    if (category === "documents") {
      return "bg-amber-50 text-amber-600";
    }

    return "bg-gray-100 text-gray-600";
  };

  // =========================
  // FORMAT FILE SIZE
  // =========================
  const formatFileSize = (bytes) => {
    if (!bytes) return "0 KB";

    if (bytes < 1024) {
      return `${bytes} Bytes`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    }

    if (bytes < 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }

    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  // =========================
  // FORMAT DATE
  // =========================
  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================
  // DELETE FILE
  // =========================
  const handleDelete = async (id) => {
    try {
      setDeleting(id);

      await api.delete(`/files/${id}`);

      setFiles((currentFiles) =>
        currentFiles.filter((file) => file._id !== id)
      );

      setConfirmDelete(null);

      // If deleted file was being previewed
      if (previewFile?._id === id) {
        setPreviewFile(null);
      }
    } catch (error) {
      console.error("Delete error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete file."
      );
    } finally {
      setDeleting(null);
    }
  };

  // =========================
  // DOWNLOAD FILE
  // =========================
  const handleDownload = async (file) => {
    try {
      const response = await fetch(file.url);

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = file.originalName;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download error:", error);

      // Fallback
      window.open(file.url, "_blank");
    }
  };

  // =========================
  // STATISTICS
  // =========================
  const statistics = useMemo(() => {
    const totalSize = files.reduce(
      (total, file) => total + (file.fileSize || 0),
      0
    );

    const images = files.filter(
      (file) => getFileCategory(file) === "images"
    ).length;

    const documents = files.filter(
      (file) => getFileCategory(file) === "documents"
    ).length;

    const videos = files.filter(
      (file) => getFileCategory(file) === "videos"
    ).length;

    return {
      totalSize,
      images,
      documents,
      videos,
    };
  }, [files]);

  // =========================
  // FILTER FILES
  // =========================
  const filteredFiles = useMemo(() => {
    return files.filter((file) => {
      const matchesSearch = file.originalName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesFilter =
        filterType === "all" ||
        getFileCategory(file) === filterType;

      return matchesSearch && matchesFilter;
    });
  }, [files, searchTerm, filterType]);

  // =========================
  // STORAGE
  // =========================
  const storageLimit = 15 * 1024 * 1024 * 1024;

  const storagePercentage = Math.min(
    (statistics.totalSize / storageLimit) * 100,
    100
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* =========================
              HEADER
          ========================= */}
          {/* =========================
    HEADER
========================= */}
          <div className="text-center">

            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Cloud Storage
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              My Dashboard
            </h1>

            <p className="text-gray-500 mt-3">
              Manage and access all your uploaded files.
            </p>

            <div className="flex justify-center mt-6">

              <Link
                to="/upload"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
              >
                <Upload size={19} />
                Upload File
              </Link>

            </div>

          </div>

          {/* =========================
              STAT CARDS
          ========================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

            {/* Storage */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <HardDrive size={22} />
                </div>

                <span className="text-xs font-medium text-gray-400">
                  TOTAL
                </span>

              </div>

              <p className="text-2xl font-bold text-gray-900 mt-5">
                {formatFileSize(statistics.totalSize)}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Storage used
              </p>

            </div>

            {/* Images */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Image size={22} />
                </div>

                <span className="text-xs font-medium text-gray-400">
                  IMAGES
                </span>

              </div>

              <p className="text-2xl font-bold text-gray-900 mt-5">
                {statistics.images}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Image files
              </p>

            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileText size={22} />
                </div>

                <span className="text-xs font-medium text-gray-400">
                  DOCUMENTS
                </span>

              </div>

              <p className="text-2xl font-bold text-gray-900 mt-5">
                {statistics.documents}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Document files
              </p>

            </div>

            {/* Videos */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Video size={22} />
                </div>

                <span className="text-xs font-medium text-gray-400">
                  VIDEOS
                </span>

              </div>

              <p className="text-2xl font-bold text-gray-900 mt-5">
                {statistics.videos}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Video files
              </p>

            </div>

          </div>

          {/* =========================
              STORAGE BAR
          ========================= */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-6">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

              <div>

                <div className="flex items-center gap-2">

                  <HardDrive
                    size={19}
                    className="text-blue-600"
                  />

                  <h2 className="font-bold text-gray-900">
                    Storage
                  </h2>

                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Keep track of your Storvia storage usage.
                </p>

              </div>

              <p className="text-sm font-semibold text-gray-700">
                {formatFileSize(statistics.totalSize)} / 15 GB
              </p>

            </div>

            <div className="mt-5 w-full bg-gray-100 rounded-full h-3 overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                style={{
                  width: `${storagePercentage}%`,
                }}
              />

            </div>

            <div className="flex justify-between mt-2 text-xs text-gray-400">

              <span>
                {storagePercentage.toFixed(2)}% used
              </span>

              <span>
                {formatFileSize(
                  Math.max(
                    storageLimit - statistics.totalSize,
                    0
                  )
                )}{" "}
                remaining
              </span>

            </div>

          </div>

          {/* =========================
              SEARCH + FILTER
          ========================= */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mt-6">

            <div className="flex flex-col lg:flex-row gap-4">

              {/* Search */}
              <div className="relative flex-1">

                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search your files..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">

                {[
                  ["all", "All"],
                  ["images", "Images"],
                  ["documents", "Documents"],
                  ["videos", "Videos"],
                  ["other", "Other"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setFilterType(value)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                      filterType === value
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* =========================
              FILE SECTION
          ========================= */}
          <div className="mt-8">

            <div className="flex items-center justify-between mb-5">

              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Your Files
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {filteredFiles.length} file
                  {filteredFiles.length !== 1 ? "s" : ""}
                </p>

              </div>

              <button
                onClick={fetchFiles}
                className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
              >
                <RefreshCw size={17} />
                Refresh
              </button>

            </div>

            {/* =========================
                LOADING
            ========================= */}
            {loading && (
              <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">

                <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto" />

                <p className="text-gray-500 mt-5">
                  Loading your files...
                </p>

              </div>
            )}

            {/* =========================
                EMPTY
            ========================= */}
            {!loading && filteredFiles.length === 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">

                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto text-gray-400">
                  <FolderOpen size={30} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-5">
                  {files.length === 0
                    ? "No files yet"
                    : "No matching files"}
                </h3>

                <p className="text-gray-500 mt-2">
                  {files.length === 0
                    ? "Upload your first file to get started."
                    : "Try changing your search or filter."}
                </p>

                {files.length === 0 && (
                  <Link
                    to="/upload"
                    className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    <Upload size={18} />
                    Upload File
                  </Link>
                )}

              </div>
            )}

            {/* =========================
                FILE GRID
            ========================= */}
            {!loading && filteredFiles.length > 0 && (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

                {filteredFiles.map((file) => (

                  <div
                    key={file._id}
                    onClick={() => setPreviewFile(file)}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer"
                  >

                    {/* =========================
                        PREVIEW
                    ========================= */}

                    {getFileCategory(file) === "images" ? (

                      <div className="h-48 bg-gray-100 overflow-hidden">

                        <img
                          src={file.url}
                          alt={file.originalName}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />

                      </div>

                    ) : getFileCategory(file) === "videos" ? (

                      <div
                        className="h-48 bg-gray-950 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >

                        <video
                          src={file.url}
                          controls
                          className="w-full h-full object-contain"
                        />

                      </div>

                    ) : (

                      <div className="h-48 bg-slate-50 flex items-center justify-center">

                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center ${getFileIconStyle(
                            file
                          )}`}
                        >
                          {getFileIcon(file)}
                        </div>

                      </div>

                    )}

                    {/* =========================
                        FILE DETAILS
                    ========================= */}

                    <div className="p-5">

                      <div className="flex items-start gap-3">

                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${getFileIconStyle(
                            file
                          )}`}
                        >
                          {getFileIcon(file)}
                        </div>

                        <div className="min-w-0 flex-1">

                          <h3
                            className="font-bold text-gray-900 truncate"
                            title={file.originalName}
                          >
                            {file.originalName}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            {formatFileSize(file.fileSize)}
                          </p>

                        </div>

                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">

                        <span className="text-xs text-gray-400">
                          {formatDate(file.createdAt)}
                        </span>

                        <div className="flex items-center gap-2">

                          {/* DOWNLOAD */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(file);
                            }}
                            title="Download"
                            className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition"
                          >
                            <Download size={17} />
                          </button>

                          {/* DELETE */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setConfirmDelete(file);
                            }}
                            title="Delete"
                            className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition"
                          >
                            <Trash2 size={17} />
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>

        </div>
      </main>

      {/* =========================
          FILE PREVIEW MODAL
      ========================= */}
      {previewFile && (
        <div
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6"
          onClick={() => setPreviewFile(null)}
        >

          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* =========================
                MODAL HEADER
            ========================= */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">

              <div className="flex items-center gap-3 min-w-0">

                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${getFileIconStyle(
                    previewFile
                  )}`}
                >
                  {getFileIcon(previewFile)}
                </div>

                <div className="min-w-0">

                  <h2
                    className="font-bold text-gray-900 truncate"
                    title={previewFile.originalName}
                  >
                    {previewFile.originalName}
                  </h2>

                  <p className="text-xs text-gray-500">
                    {formatFileSize(previewFile.fileSize)}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                {/* DOWNLOAD */}
                <button
                  onClick={() =>
                    handleDownload(previewFile)
                  }
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                >
                  <Download size={16} />
                  Download
                </button>

                {/* CLOSE */}
                <button
                  onClick={() => setPreviewFile(null)}
                  className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <X size={20} />
                </button>

              </div>

            </div>

            {/* =========================
                PREVIEW AREA
            ========================= */}
            <div className="bg-slate-100 p-6 overflow-auto max-h-[calc(90vh-80px)]">

              {/* IMAGE */}
              {getFileCategory(previewFile) === "images" && (
                <div className="flex justify-center">

                  <img
                    src={previewFile.url}
                    alt={previewFile.originalName}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow"
                  />

                </div>
              )}

              {/* VIDEO */}
              {getFileCategory(previewFile) === "videos" && (
                <div className="flex justify-center">

                  <video
                    src={previewFile.url}
                    controls
                    autoPlay
                    className="max-w-full max-h-[70vh] rounded-lg shadow"
                  />

                </div>
              )}

              {/* PDF */}
              {previewFile.fileType?.toLowerCase().includes("pdf") && (
                <iframe
                  src={previewFile.url}
                  title={previewFile.originalName}
                  className="w-full h-[70vh] rounded-lg bg-white"
                />
              )}

              {/* OTHER DOCUMENTS */}
              {getFileCategory(previewFile) === "documents" &&
                !previewFile.fileType
                  ?.toLowerCase()
                  .includes("pdf") && (

                  <div className="min-h-[400px] flex flex-col items-center justify-center text-center">

                    <div
                      className={`w-24 h-24 rounded-3xl flex items-center justify-center ${getFileIconStyle(
                        previewFile
                      )}`}
                    >
                      {getFileIcon(previewFile)}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mt-6">
                      Preview unavailable
                    </h3>

                    <p className="text-gray-500 mt-2 max-w-md">
                      This file type cannot be previewed directly in the
                      browser. Download the file to open it.
                    </p>

                    <button
                      onClick={() =>
                        handleDownload(previewFile)
                      }
                      className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                      <Download size={18} />
                      Download File
                    </button>

                  </div>
                )}

              {/* OTHER FILES */}
              {getFileCategory(previewFile) === "other" && (

                <div className="min-h-[400px] flex flex-col items-center justify-center text-center">

                  <div
                    className={`w-24 h-24 rounded-3xl flex items-center justify-center ${getFileIconStyle(
                      previewFile
                    )}`}
                  >
                    <File size={40} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-6 break-all">
                    {previewFile.originalName}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {formatFileSize(previewFile.fileSize)}
                  </p>

                  <button
                    onClick={() =>
                      handleDownload(previewFile)
                    }
                    className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    <Download size={18} />
                    Download File
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

      {/* =========================
          DELETE CONFIRMATION
      ========================= */}
      {confirmDelete && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-7">

            <div className="flex items-center justify-between">

              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <AlertTriangle size={24} />
              </div>

              <button
                onClick={() => setConfirmDelete(null)}
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={22} />
              </button>

            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-6">
              Delete this file?
            </h2>

            <p className="text-gray-500 mt-2 leading-6">
              Are you sure you want to permanently delete{" "}
              <span className="font-semibold text-gray-700">
                {confirmDelete.originalName}
              </span>
              ?
            </p>

            <div className="flex gap-3 mt-7">

              <button
                onClick={() => setConfirmDelete(null)}
                disabled={deleting}
                className="flex-1 py-3 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <button
                onClick={() =>
                  handleDelete(confirmDelete._id)
                }
                disabled={deleting}
                className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Delete File"}
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}

export default Dashboard;