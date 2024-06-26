import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";

function Login() {
 const INITIAL_LOGIN_OBJ = {
  password: "",
  emailId: ""
 };

 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState("");
 const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

 const submitForm = (e) => {
  e.preventDefault();
  setErrorMessage("");

  if (loginObj.emailId.trim() === "")
   return setErrorMessage("Email Id is required! (use any value)");
  if (loginObj.password.trim() === "")
   return setErrorMessage("Password is required! (use any value)");
  else {
   const email = loginObj.emailId;

   setLoading(true);
   // Call API to check user credentials and save token in localstorage
   localStorage.setItem("token", "DumyTokenHere");
   localStorage.setItem("email", email);
   setLoading(false);

   const emailFromLs = localStorage.getItem("email");

   switch (emailFromLs) {
    case "hod@mail.com":
     window.location.href = "app/dashboard/hod";
     break;
    case "dean@mail.com":
     window.location.href = "app/dashboard/dean";
     break;
    case "lecturer@mail.com":
     window.location.href = "app/dashboard/lecturer";
     break;

    default:
     window.location.href = "app/dashboard";
     break;
   }
  }
 };

 const updateFormValue = ({ updateType, value }) => {
  setErrorMessage("");
  setLoginObj({ ...loginObj, [updateType]: value });
 };

 return (
  <div className="min-h-screen bg-base-200 flex items-center">
   <div className="card mx-auto w-full max-w-md flex justify-center shadow-xl">
    <div className="bg-base-100 rounded-xl">
     <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
      <form onSubmit={(e) => submitForm(e)}>
       <div className="mb-4">
        <InputText
         type="emailId"
         defaultValue={loginObj.emailId}
         updateType="emailId"
         containerStyle="mt-4"
         labelTitle="Email Id"
         updateFormValue={updateFormValue}
        />

        <InputText
         defaultValue={loginObj.password}
         type="password"
         updateType="password"
         containerStyle="mt-4"
         labelTitle="Password"
         updateFormValue={updateFormValue}
        />
       </div>

       <div className="text-right text-primary">
        <Link to="/forgot-password">
         <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
          Forgot Password?
         </span>
        </Link>
       </div>

       <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
       <button
        type="submit"
        className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}
       >
        Login
       </button>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Login;
