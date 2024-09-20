/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { useSubmit } from "react-router-dom";
import { useEffect } from "react";
export default function LoginOptions({ icon, type, setLoginType }) {
  // const { loginType } = useSelector((state) => state.login);
  // const submit = useSubmit();
  function handleLoginClick(type) {
    setLoginType(type);
  }

  return (
    <div
      onClick={() => handleLoginClick(type)}
      className="px-4 py-4 flex items-center justify-between gap-8 border-2 border-solid border-transparent hover:border-solid hover:rounded-lg hover:border-blue-400 hover:border-2 hover:cursor-pointer"
    >
      <span className="rounded-full bg-sky-500 w-14 h-14 flex items-center justify-center text-2xl text-neutral-100">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold">{type} Login</h3>
        <p className="text-gray-500">
          This will take you to the {type} login page.
        </p>
      </div>
      <MdArrowForwardIos className="text-xl" />
    </div>
  );
}
