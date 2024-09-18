import { Outlet } from "react-router-dom";
import TopNavigation from "../components/TopNavigation.jsx";
import SideNavigation from "../components/SideNavigation.jsx";
export default function RootLayout() {
  return (
    <>
      <TopNavigation />
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
