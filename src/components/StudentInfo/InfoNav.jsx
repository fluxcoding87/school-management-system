import { NavLink } from "react-router-dom";

export default function InfoNav() {
  let classes =
    "text-white font-semibold px-8 py-4 rounded-tr-md rounded-tl-md";
  return (
    <nav>
      <ul className="flex justify-start items-center gap-4">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li className="">Personal Info</li>
        </NavLink>
        <NavLink
          to="parents"
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li>Parents</li>
        </NavLink>
        <NavLink
          to="subjects"
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li>Subjects</li>
        </NavLink>
        <NavLink
          to="time-table"
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li>Time Table</li>
        </NavLink>
        <NavLink
          to="attendance"
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li>Attendance</li>
        </NavLink>
        <NavLink
          to="fee-details"
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li>Fee Details</li>
        </NavLink>
        <NavLink
          to="transport-info"
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li>Transport Info</li>
        </NavLink>
        <NavLink
          to="performance"
          className={({ isActive }) =>
            isActive ? classes + " bg-sky-900" : classes + " bg-sky-500"
          }
        >
          <li>Performance</li>
        </NavLink>
      </ul>
    </nav>
  );
}
