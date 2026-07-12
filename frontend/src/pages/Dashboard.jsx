import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-600 mt-4">
          Welcome to your personal cloud storage.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-12">

          <div className="bg-white shadow-xl rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Photos
            </h2>

            <p className="mt-3 text-gray-600">
              0 Files
            </p>

          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Videos
            </h2>

            <p className="mt-3 text-gray-600">
              0 Files
            </p>

          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">

            <h2 className="text-2xl font-bold">
              Documents
            </h2>

            <p className="mt-3 text-gray-600">
              0 Files
            </p>

          </div>

        </div>

      </div>

    </>
  );
}

export default Dashboard;