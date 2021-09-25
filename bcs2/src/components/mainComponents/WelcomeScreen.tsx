/** @jsxImportSource theme-ui */
import { Flex, Heading } from "theme-ui";
import { useRecoilValue } from 'recoil';
import PropsyBoxWithExitBtn from "../elements/atoms/PropsyBoxWithExitBtn";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBox from "../elements/atoms/PropsyBox";
import PropsyMainContainer from "../elements/atoms/PropsyMainContainer";
import { useEffect, useState } from "react";
import { userNameInLS } from '../../recoil/recoil';

function WelcomeScreen() {
  const [state, setstate] = useState(() => localStorage.getItem('userName'));
  const userRecoilName: any = useRecoilValue(userNameInLS);

  useEffect(() => {
   if (state === null) setstate(userRecoilName);
  }, [state])


    return (
      <PropsyBodyContainer content={
        <PropsyMainContainer content={<>
          <PropsyBoxWithExitBtn /> 
          <PropsyBox content={ <Heading>{`Hello ${userRecoilName}! Are you ready for the bootcamp?`}</Heading>} />         
        </>} />      
      } />
    );
  }
  
  export default WelcomeScreen;