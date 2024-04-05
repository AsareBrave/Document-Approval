// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const HodDashboard = lazy(() => import("../pages/protected/HodDashboard"));
const DeanDashboard = lazy(() => import("../pages/protected/DeanDashboard"));
const LecturerDashboard = lazy(() =>
 import("../pages/protected/lecturerDashboard")
);
const LecturerLeads = lazy(() => import("../pages/protected/LecturerLeads"));
const HodLeads = lazy(() => import("../pages/protected/HodLeads"));
const DefaultLeads = lazy(() => import("../pages/protected/DefaultLeads"));

const routes = [
  // default routes (student)
 {
  path: "/dashboard", // the url
  component: Dashboard // view rendered
 },
 {
  path: "/dashboard/leads",
  component: DefaultLeads
 },

//  hod routes
 {
  path: "/dashboard/hod", // the url
  component: HodDashboard // view rendered
 },
 {
  path: "/dashboard/hod/leads",
  component: HodLeads
 },

//  dean routes
 {
  path: "/dashboard/dean", // the url
  component: DeanDashboard // view rendered
 },

//  lecturer
 {
  path: "/dashboard/lecturer", // the url
  component: LecturerDashboard // view rendered
 },
 {
  path: "/dashboard/lecturer", // the url
  component: LecturerDashboard // view rendered
 },

 {
  path: "/dashboard/lecturer/leads", // the url
  component: LecturerLeads // view rendered
 }
];

export default routes;
