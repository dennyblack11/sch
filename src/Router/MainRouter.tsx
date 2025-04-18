import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/LayoutHolder/Layout";
import LandingPagesHolder from "../Pages/LandingPage/LandingPagesHolder/LandingPagesHolder";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Verify from "../Auth/Verify";
import TermsHolder from "../Pages/TermsPage/TermsHolder/TermsHolder";
import AboutHolder from "../Pages/AboutPage/AboutPageHolder/AboutHolder";
import ContactHolder from "../Pages/ContactPage/ContactHolder/ContactHolder";
import PricingHolder from "../Pages/PricingPage/PricingHolder/PricingHolder";
import LoginStaff from "../Auth/LoginStaff";
import LoginUser from "../Auth/LoginUser";
import DashLayout from "../AllSchoolDashboard/DashboardComponents/DashLayout";
import Dashboard from "../AllSchoolDashboard/DashboardPages/Homepage/Dashboard";
import Teacher from "../AllSchoolDashboard/DashboardPages/TeachersManagement/Teacher";
import Student from "../AllSchoolDashboard/DashboardPages/StudentManagement/Student";
import Subjects from "../AllSchoolDashboard/DashboardPages/SubjectsManagement/Subjects";
import Classes from "../AllSchoolDashboard/DashboardPages/ClassManagement/Classes";
import { Settings } from "lucide-react";
import LessonNote from "../AllSchoolDashboard/DashboardPages/LessonNotes/LessonNote";
import OperationHistory from "../AllSchoolDashboard/DashboardPages/OperationalHistory/OperationHistory";
import SubscriptionPage from "../AllSchoolDashboard/DashboardPages/Subscription/SubscriptionPage";
import StudentDetail from "../AllSchoolDashboard/DashboardPages/StudentManagement/StudentDetail";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPagesHolder />,
      },
      {
        index: true,
        path: "/about",
        element: <AboutHolder />,
      },
      {
        index: true,
        path: "/contact",
        element: <ContactHolder />,
      },
      {
        index: true,
        path: "/pricing",
        element: <PricingHolder />,
      },
      {
        index: true,
        path: "/ourterms",
        element: <TermsHolder />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login-teacher",
    element: <LoginStaff />,
  },
  {
    path: "/login-student",
    element: <LoginUser />,
  },
  {
    path: "/verify/:schoolID",
    element: <Verify />,
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/teachers",
        element: <Teacher />,
      },
      {
        path: "/dashboard/students",
        element: <Student />,
      },
      {
        path: "/dashboard/students/:ID",
        element: <StudentDetail />,
      },
      {
        path: "/dashboard/subjects",
        element: <Subjects />,
      },
      {
        path: "/dashboard/classes",
        element: <Classes />,
      },
      {
        path: "/dashboard/lesson-notes",
        element: <LessonNote />,
      },
      {
        path: "/dashboard/operations-history",
        element: <OperationHistory />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/subscription-plans",
        element: <SubscriptionPage />,
      },
    ],
  },
]);
