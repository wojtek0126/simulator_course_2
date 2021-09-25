/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import auth from "../../firebase/firebase";
// import {useAuthState} from 'react-firebase-hooks/auth';
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBox from "../elements/atoms/PropsyBox";
import PropsyBoxWithExitBtn from "../elements/atoms/PropsyBoxWithExitBtn";
import PropsyButton from "../elements/atoms/PropsyButton";
import PropsyButtonWrapper from "../elements/atoms/PropsyButtonWrapper";
import PropsyInput from "../elements/atoms/PropsyInput";
import PropsyMainContainer from "../elements/atoms/PropsyMainContainer";
import PropsyLinkButton from "../elements/atoms/PropsyLinkButton";
import { userNameAtom } from "../../recoil/recoil"
// import { signInAnonymously } from "firebase/auth";
// import getFirebase from "../../firebase/firebase";


const LoginScreen: any = React.memo(function() {
  // const [user] = useAuthState(auth);
  // const [logBtnTxt, setLogBtnTxt] = useState('Sign in');
  

  const [userNameValue, setUserNameValue] = useState("");
  // const [passwordlValue, setPasswordValue] = useState("");

  // const [loginOrRegister, setLoginOrRegister] = useState('login')
  const [userName, setUserName] = useRecoilState(userNameAtom);
 

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