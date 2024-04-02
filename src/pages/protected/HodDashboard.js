import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import HodDashboard from "../../features/hodDashboard/index";

function InternalPage() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(setPageTitle({ title: "HOD Dashboard" }));
 }, []);

 return <HodDashboard />;
}

export default InternalPage;
