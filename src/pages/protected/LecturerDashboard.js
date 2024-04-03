import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import LecturerDashboard from "../../features/lecturerDashboard/index";

function InternalPage() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(setPageTitle({ title: "Lecturer Dashboard" }));
 }, []);

 return <LecturerDashboard />;
}

export default InternalPage;
