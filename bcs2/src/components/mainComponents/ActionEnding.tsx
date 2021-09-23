/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui";
import { containerLoginScreen } from "../../styles/storeAndThemes";
import PropsyContainer from "../elements/PropsyContainer";
import PropsyExitWithLink from "../elements/PropsyExitWithLink";

function ActionEnding() {
    return (
      <PropsyContainer content={
        <Flex sx={containerLoginScreen}>
           <PropsyExitWithLink />
        </Flex>
      } />
    );
  }
  
  export default ActionEnding;