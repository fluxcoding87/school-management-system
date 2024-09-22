import { Outlet } from "react-router-dom";
import InfoNav from "./InfoNav";
export default function InfoLayout() {
  return (
    <section className="px-2 py-2">
      <header>
        <InfoNav />
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
