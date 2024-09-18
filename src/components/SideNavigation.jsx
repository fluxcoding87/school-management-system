import { useSelector } from "react-redux";
import NavItem from "./NavItem.jsx";
import {
  MdAssessment,
  MdHome,
  MdImage,
  MdLocalLibrary,
  MdOfflineBolt,
  MdPerson,
  MdSettings,
  MdTextsms,
} from "react-icons/md";
export default function SideNavigation() {
  const showQuickLink = useSelector((state) => state.nav.showQuickLink);

  return (
    <>
      {showQuickLink && (
        <aside className="absolute left-[16.2rem] z-10 bg-gradient-to-b from-[#000000be] to-neutral-800 ">
          <nav>
            <ul className="max-h-[30rem] overflow-y-scroll scrollbar-thin scrollbar-track-rounded-full">
              <li>
                <NavItem passedIcon={<MdHome />} to="/timeline">
                  Home
                </NavItem>
              </li>
              <li>
                <NavItem passedIcon={<MdPerson />} to="/student/student-info">
                  Student Info
                </NavItem>
              </li>
              <li>
                <NavItem
                  passedIcon={<MdOfflineBolt />}
                  to="/student/performance"
                >
                  Performance
                </NavItem>
              </li>
              <li>
                <NavItem passedIcon={<MdTextsms />} to="/student/communication">
                  Communication
                </NavItem>
              </li>
              <li>
                <NavItem passedIcon={<MdImage />} to="/student/image-gallery">
                  Image Gallery
                </NavItem>
              </li>
              <li>
                <NavItem passedIcon={<MdLocalLibrary />} to="/student/library">
                  Library
                </NavItem>
              </li>
              <li>
                <NavItem
                  passedIcon={<MdAssessment />}
                  to="/student/online-assessment"
                >
                  Online Assessment
                </NavItem>
              </li>
              <li>
                <NavItem passedIcon={<MdSettings />} to="/student/settings">
                  Change Password
                </NavItem>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
}
