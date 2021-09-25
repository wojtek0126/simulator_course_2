/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui";
import { containerLoginScreen } from "../../styles/storeAndThemes";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBoxWithExitBtn from "../elements/atoms/PropsyBoxWithExitBtn";

function PlayerInventory() {
    return (
      <PropsyBodyContainer content={
        <Flex sx={containerLoginScreen}>
         <PropsyBoxWithExitBtn />
        </Flex>
      } />    
    );
  }
  
  export default PlayerInventory;