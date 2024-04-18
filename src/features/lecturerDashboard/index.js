import DashboardStats from "./components/DashboardStats";

import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DashboardTopBar from "./components/DashboardTopBar";

const statsData = [
 {
  title: "Total Documents",
  value: "100",
  icon: <UserGroupIcon className="w-8 h-8" />,
  description: "↗︎ 2300 (22%)"
 },
 {
  title: "Approved Documents",
  value: "35",
  icon: <CreditCardIcon className="w-8 h-8" />,
  description: "Current month"
 },
 {
  title: "Rejected Documents",
  value: "4",
  icon: <CircleStackIcon className="w-8 h-8" />,
  description: "50 in hot leads"
 }
];

function HodDashboard() {
 const dispatch = useDispatch();

 const updateDashboardPeriod = (newRange) => {
  // Dashboard range changed, write code to refresh your values
  dispatch(
   showNotification({
    message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
    status: 1
   })
  );
 };

 return (
  <>
   {/** ---------------------- Select Period Content ------------------------- */}
   <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

   {/** ---------------------- Different stats content 1 ------------------------- */}
   <div className="grid lg:grid-cols-3 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
    {statsData.map((d, k) => {
     return <DashboardStats key={k} {...d} colorIndex={k} />;
    })}
   </div>
  </>
 );
}

export default HodDashboard;
