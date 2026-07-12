import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            STORVIA
          </h1>

          <p className="text-gray-500 mt-3">
            Create your free account
          </p>

        </div>

        <form className="mt-10 space-y-6">

          <div>

            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;