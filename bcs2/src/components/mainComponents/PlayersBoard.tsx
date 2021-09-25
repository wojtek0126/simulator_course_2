/** @jsxImportSource theme-ui */
import firebase from "firebase/compat";
import { Flex, Heading } from "theme-ui";
import { containerLoginScreen } from "../../styles/storeAndThemes";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBox from "../elements/atoms/PropsyBox";
import PropsyBoxWithExitBtn, { signOut } from "../elements/atoms/PropsyBoxWithExitBtn";
import PropsyButton from "../elements/atoms/PropsyButton";
import PropsyButtonWrapper from "../elements/atoms/PropsyButtonWrapper";
import PropsyInput from "../elements/atoms/PropsyInput";
import PropsyLinkButton from "../elements/atoms/PropsyLinkButton";
import PropsyMainContainer from "../elements/atoms/PropsyMainContainer";

function PlayersBoard() {

  return (
  <PropsyBodyContainer content={
    <PropsyMainContainer content={<>
      <PropsyBox position={'fixed'}
                 content={<>         
      <Heading sx={{padding: 2}}>Enter new player's name</Heading>
      <PropsyInput placeholder={'Min 3 max 30 characters'}/>
        <PropsyButtonWrapper content={<>
          <PropsyButton buttonContent={`Add`}/>
          <PropsyLinkButton buttonContent={`Exit`} onClick={signOut} linkTo={'home'} />

        </>} />          
      </>} />
    </>} />
  }/>     
   
);
  }
  
  export default PlayersBoard;  
  
  

