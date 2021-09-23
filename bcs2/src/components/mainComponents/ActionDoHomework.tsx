/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui";
import { containerLoginScreen } from "../../styles/storeAndThemes";
import PropsyContainer from "../elements/PropsyContainer";
import PropsyExitWithLink from "../elements/PropsyExitWithLink";

function ActionDoHomework() {
    return (
      <PropsyContainer content={
        <Flex sx={containerLoginScreen}>
         <PropsyExitWithLink />
        </Flex>
      } />
    );
  }
  
  export default ActionDoHomework;