// All components mapping with path for internal routes


import { lazy } from "react";


const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const HodDashboard = lazy(() => import("../pages/protected/HodDashboard"));
const DeanDashboard = lazy(() => import("../pages/protected/DeanDashboard"));
// const LecturerDashboard = lazy(() =>
//  import("../pages/protected/LecturerDashboard")
// );

const routes = [
 {
  path: "/dashboard", // the url
  component: Dashboard // view rendered
 },
 {
  path: "/dashboard/hod", // the url
  component: HodDashboard // view rendered
 },
 {
  path: "/dashboard/dean", // the url
  component: DeanDashboard // view rendered
 },
 {
  // path: "/dashboard/lecturer", // the url
  // component: LecturerDashboard // view rendered
 }
];

export default routes;
