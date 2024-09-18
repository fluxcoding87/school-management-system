import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import TimelinePage from "./pages/Timeline";
import LoginPage from "./pages/Login.jsx";
import StudentInfoPage from "./pages/StudentInfo.jsx";
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
        element: <StudentInfoPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
