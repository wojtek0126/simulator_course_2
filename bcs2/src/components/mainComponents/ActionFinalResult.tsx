/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import { Flex } from "theme-ui";
import { containerLoginScreen, wrapperBtnExit } from "../../styles/storeAndThemes";
import PropsyButton from "../elements/PropsyButton";
import PropsyContainer from "../elements/PropsyContainer";
import PropsyExitWithLink from "../elements/PropsyExitWithLink";

function ActionFinalResult() {
    return (
      <PropsyContainer content={
        <Flex sx={containerLoginScreen}>
         <PropsyExitWithLink />
        </Flex>
      } />
    );
  }
  
  export default ActionFinalResult;