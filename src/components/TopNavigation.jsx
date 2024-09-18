import {
  MdSearch,
  MdCalendarMonth,
  MdAppRegistration,
  MdPerson,
  MdArrowDropDown,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navActions } from "../store/nav-slice";
export default function TopNavigation() {
  const dispatch = useDispatch();

  function handleDropDown() {
    dispatch(navActions.toggle());
  }

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="flex justify-center items-center gap-5">
          <img src="" alt="website logo" />
          <h2>School Name</h2>
          <button
            className="flex items-center justify-center "
            onClick={handleDropDown}
          >
            Quick Links <MdArrowDropDown className="text-[1.4rem]" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="relative mr-8">
            <label
              htmlFor="find-menu"
              className="absolute left-2 top-2 text-[1.5rem] cursor-pointer"
            >
              <MdSearch />
            </label>
            <input
              id="find-menu"
              type="search"
              className="px-10 py-2 rounded-full"
              placeholder="Find a menu option"
            />
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 text-[1.8rem]"
                : "text-white text-[1.8rem] "
            }
            to="/student/calender"
          >
            <MdCalendarMonth />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 text-[1.8rem]"
                : "text-white text-[1.8rem] "
            }
            to="/student/appointment"
          >
            <MdAppRegistration />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 text-[1.8rem]"
                : "text-white text-[1.8rem] "
            }
            to="/student/settings"
          >
            <MdPerson />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
