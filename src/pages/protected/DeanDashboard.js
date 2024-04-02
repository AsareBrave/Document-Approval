import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import DeanDashboard from "../../features/deanDashboard/index";

function InternalPage() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(setPageTitle({ title: "Dean Dashboard" }));
 }, []);

 return <DeanDashboard />;
}

export default InternalPage;
