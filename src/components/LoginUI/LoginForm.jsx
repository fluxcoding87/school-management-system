/* eslint-disable react/prop-types */
import { Form, Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
export default function LoginForm({ loginType }) {
  function handleReload() {
    window.history.pushState({}, null, "/");
    window.location.reload();
  }
  return (
    <Form className="w-full h-full">
      <Link to="/" onClick={handleReload} className="text-2xl">
        <MdOutlineArrowBack />
      </Link>
      <div className="text-center">
        <h3 className="font-semibold text-2xl">{loginType} Login</h3>
      </div>
      <div className="flex flex-col mt-8">
        <label className="font-medium" htmlFor={`${loginType}`}>
          {loginType} Id
        </label>
        <input
          id={`${loginType}`}
          type="text"
          className="w-[30rem] px-3 h-10 border-2 border-solid rounded-md border-sky-600"
          required
        />
        <label className="font-medium mt-12" htmlFor="password">
          {loginType} Password
        </label>
        <input
          id="password"
          type="password"
          className="w-[30rem] px-3 h-10 border-2 border-solid rounded-md border-sky-600"
          required
        />
      </div>
      <div className="flex items-center justify-end mt-8 gap-4">
        <Link
          to="/settings"
          className="text-gray-700 font-medium hover:text-black"
        >
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="bg-sky-700 text-gray-100 px-8 py-3 rounded-md font-medium hover:bg-sky-900"
        >
          Log In
        </button>
      </div>
    </Form>
  );
}
