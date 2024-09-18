/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { navActions } from "../store/nav-slice";

export default function NavItem({ children, passedIcon, ...props }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(navActions.toggle());
  }
  return (
    <div className="min-w-[20rem] my-10 ml-2">
      <NavLink
        {...props}
        onClick={handleClick}
        className={({ isActive }) =>
          isActive
            ? "flex items-center justify-start w-full gap-3 min-h-12 text-white font-semibold"
            : "flex items-center justify-start w-full gap-3 min-h-12 text-gray-400 font-semibold hover:text-white transition-all duration-[0.3s]"
        }
      >
        <span className="text-[2rem]">{passedIcon}</span>
        {children}
      </NavLink>
    </div>
  );
}
