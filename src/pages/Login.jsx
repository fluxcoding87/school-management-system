/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Form, Link, useSubmit } from "react-router-dom";
import LoginOptions from "../components/LoginUI/LoginOptions";
import { MdAdminPanelSettings, MdSchool, MdBusiness } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/login-slice";
import LoginForm from "../components/LoginUI/LoginForm";
export default function LoginPage() {
  const submit = useSubmit();
  const dispatch = useDispatch();
  const { loginType } = useSelector((state) => state.login);

  function setLoginType(type) {
    dispatch(loginActions.setType({ loginType: type }));
  }

  useEffect(() => {
    if (!loginType) return;
    if (loginType === "student") {
      submit("?mode=student");
    }
    if (loginType === "teacher") {
      submit("?mode=teacher");
    }
    if (loginType === "admin") {
      submit("?mode=admin");
    }
  }, [loginType, submit]);

  return (
    <div className="h-[100dvh] flex bg-gradient-to-br from-sky-500 to-blue-500">
      <div className="flex flex-col flex-grow w-[70%] bg-white">
        <header className="px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="" alt="website logo" />
            <Link
              to="/timeline"
              className="px-2 py-2 text-lg border-solid border-2 rounded-md border-sky-700 hover:bg-sky-300 "
            >
              Go to Home
            </Link>
          </div>
        </header>
        <div className="flex flex-grow items-center flex-col">
          <div className="flex flex-col items-center justify-center xl:mt-12 lg:mt-4">
            <h2 className="font-bold text-2xl">
              Welcome to School Management System.
            </h2>
            <p className="font-semibold mt-4">Choose from different login.</p>
          </div>
          <div className="flex justify-center items-center xl:h-[30rem] lg:h-[25rem]">
            <div className="px-8 py-4 flex flex-col items-center justify-evenly gap-8 rounded-lg shadow-[10px_20px_30px_3px_rgba(0,0,0,0.3)] transition-all duration-1000">
              {!loginType && (
                <>
                  <LoginOptions
                    icon={<MdSchool />}
                    type="Student"
                    setLoginType={setLoginType}
                  />
                  <LoginOptions
                    icon={<MdBusiness />}
                    type="Teacher"
                    setLoginType={setLoginType}
                  />
                  <LoginOptions
                    icon={<MdAdminPanelSettings />}
                    type="Admin"
                    setLoginType={setLoginType}
                  />
                </>
              )}
              {loginType === "student" && <LoginForm loginType="Student" />}
              {loginType === "teacher" && <LoginForm loginType="Teacher" />}
              {loginType === "admin" && <LoginForm loginType="Admin" />}
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[30%]"></div>
    </div>
  );
}
