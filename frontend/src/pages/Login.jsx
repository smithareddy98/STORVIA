import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            STORVIA
          </h1>

          <p className="text-gray-500 mt-3">
            Welcome back! Sign in to continue.
          </p>

        </div>

        <form className="mt-10 space-y-6">

          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Sign In
          </button>

        </form>

        <p className="text-center mt-8 text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-2"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;