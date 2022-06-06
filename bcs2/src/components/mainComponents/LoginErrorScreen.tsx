/** @jsxImportSource theme-ui */
import { Heading } from "theme-ui";
import PropsyBoxWithExitBtn from "../elements/atoms/PropsyBoxWithExitBtn";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBox from "../elements/atoms/PropsyBox";
import PropsyMainContainer from "../elements/atoms/PropsyMainContainer";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import WelcomeScreen from "./WelcomeScreen";

function LoginErrorScreen() {
  let user = firebase.auth().currentUser; 
  const [loading, setLoading] = useState("Please wait...");

  useEffect(() => {
    setTimeout(() => {
      setLoading(`Sorry login was unsuccesful. Please exit and try again.`);
    }, 2000);
  }, []);

  if(user) {
    return <WelcomeScreen />
  }
  else {
    return (
      <PropsyBodyContainer content={
        <PropsyMainContainer content={<>
          <PropsyBoxWithExitBtn /> 
          <PropsyBox content={ <Heading>{loading}</Heading>} />         
        </>} />      
      } />
    );
  }   
  };
  
  export default LoginErrorScreen;