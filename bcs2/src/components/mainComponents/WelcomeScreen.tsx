/** @jsxImportSource theme-ui */
import { Flex, Heading } from "theme-ui";
import { useRecoilValue } from 'recoil';
import PropsyBoxWithExitBtn from "../elements/atoms/PropsyBoxWithExitBtn";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBox from "../elements/atoms/PropsyBox";
import PropsyMainContainer from "../elements/atoms/PropsyMainContainer";
import { useEffect, useState } from "react";
import { userNameInLS } from '../../recoil/recoil';
import firebase from "firebase/compat";
import LoginErrorScreen from "./LoginErrorScreen";

function WelcomeScreen() {
  let user = firebase.auth().currentUser; 
  const userRecoilName: any = useRecoilValue(userNameInLS);


if (user) {
  return (
    <PropsyBodyContainer content={
      <PropsyMainContainer content={<>
        <PropsyBoxWithExitBtn /> 
        <PropsyBox content={ <Heading>{`Hello ${userRecoilName}! Are you ready for the bootcamp?`}</Heading>} />         
      </>} />      
    } />
  );
}
else {
  return <LoginErrorScreen />
  } 
};
  
  export default WelcomeScreen;