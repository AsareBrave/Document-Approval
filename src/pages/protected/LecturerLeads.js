import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import LecturerLeads from "../../features/lecturerLeads";

function InternalPage() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(setPageTitle({ title: "Documents Uploaded" }));
 }, []);

 return <LecturerLeads />;
}

export default InternalPage;
