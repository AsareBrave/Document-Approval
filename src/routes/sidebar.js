/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";

const iconClasses = `h-6 w-6`;

const routes = [
 {
  path: "/app/dashboard",
  icon: <Squares2X2Icon className={iconClasses} />,
  name: "Dashboard"
 },
 {
  path: "/app/documents",
  icon: <Squares2X2Icon className={iconClasses} />,
  name: "Documents"
 }
];

export const hodRoutes = [
 {
  path: "/app/dashboard/hod",
  icon: <Squares2X2Icon className={iconClasses} />,
  name: "Dashboard"
 },
];

export const DeanRoutes = [
 {
  path: "/app/dashboard/dean",
  icon: <Squares2X2Icon className={iconClasses} />,
  name: "Dashboard"
 }
];

export const LecturerRoutes = [
 {
  path: "/app/dashboard/lecturer",
  icon: <Squares2X2Icon className={iconClasses} />,
  name: "Dashboard"
 }
];

export default routes;
