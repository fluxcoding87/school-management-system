import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import TimelinePage from "./pages/Timeline";
import LoginPage from "./pages/Login.jsx";
import PersonalInfoPage from "./pages/StudentInfo/PersonalInfo.jsx";
import InfoLayout from "./components/StudentInfo/InfoLayout.jsx";
import ParentsPage from "./pages/StudentInfo/Parents.jsx";
import SubjectsPage from "./pages/StudentInfo/Subjects.jsx";
import TimeTablePage from "./pages/StudentInfo/TimeTable.jsx";
import AttendancePage from "./pages/StudentInfo/Attendance.jsx";
import FeeDetailsPage from "./pages/StudentInfo/FeeDetails.jsx";
import TransportInfoPage from "./pages/StudentInfo/TransportInfo.jsx";
import PerformancePage from "./pages/StudentInfo/Performance.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/timeline",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TimelinePage />,
      },
    ],
  },
  {
    path: "student",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TimelinePage />,
      },
      {
        path: "student-info",
        element: <InfoLayout />,
        children: [
          { index: true, element: <PersonalInfoPage /> },
          { path: "parents", element: <ParentsPage /> },
          { path: "subjects", element: <SubjectsPage /> },
          { path: "time-table", element: <TimeTablePage /> },
          { path: "attendance", element: <AttendancePage /> },
          { path: "fee-details", element: <FeeDetailsPage /> },
          { path: "transport-info", element: <TransportInfoPage /> },
          { path: "performance", element: <PerformancePage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
