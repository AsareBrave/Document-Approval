import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import HodLeads from "../../features/hodLeads";

function InternalPage() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(setPageTitle({ title: "Hod Leads" }));
 }, []);

 return <HodLeads />;
}

export default InternalPage;
