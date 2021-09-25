/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { useSetRecoilState } from 'recoil';
import auth from "../../firebase/firebase";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBox from "../elements/atoms/PropsyBox";
import PropsyBoxWithExitBtn from "../elements/atoms/PropsyBoxWithExitBtn";
import PropsyButtonWrapper from "../elements/atoms/PropsyButtonWrapper";
import PropsyInput from "../elements/atoms/PropsyInput";
import PropsyMainContainer from "../elements/atoms/PropsyMainContainer";
import PropsyLinkButton from "../elements/atoms/PropsyLinkButton";
import { userNameAtom } from "../../recoil/recoil"
import firebase from "firebase/compat";


const LoginScreen: any = React.memo(function() {
  const [userNameValue, setUserNameValue] = useState("");
  const setUserName =  useSetRecoilState(userNameAtom);
 

  const handleChangeUserName = (event: any) => {
    setUserNameValue(event.target.value);  
  };
  
  const signIn = async () => {      
    await auth.signInAnonymously().catch(alert);
    setUserName(userNameValue);    
    localStorage.setItem('userName', userNameValue);      
};

    return (
      <PropsyBodyContainer content={
        <PropsyMainContainer content={<>
          <PropsyBoxWithExitBtn />
          <PropsyBox content={<>
         
          {/* <form onSubmit={signIn}>             */}
          <PropsyInput onChange={handleChangeUserName} />
          {/* <PropsyInput type={'password'} onChange={handleChangePassword} /> */}
            <PropsyButtonWrapper content={<>
              <PropsyLinkButton  onClick={signIn} linkTo={'welcome'} buttonContent={`Let's go`}/>
              {/* <PropsyButton buttonContent={'+'}  /> */}
            </>} />          
          {/* </form>   */}
          </>} />
        </>} />
      }/>      
       
    );
  })
  
  export default LoginScreen;