/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import { Flex } from "theme-ui";
import { containerLoginScreen, wrapperBtnExit } from "../../styles/storeAndThemes";
import PropsyButton from "../elements/PropsyButton";
import PropsyContainer from "../elements/PropsyContainer";

function ActionSkipSchool
() {
    return (
      <PropsyContainer content={
        <Flex sx={containerLoginScreen}>
          <Flex sx={wrapperBtnExit}>
            <Link to='/home'>
              <PropsyButton btnContent={'Exit'} />
            </Link>           
          </Flex>
        </Flex>
      } />
    );
  }
  
  export default ActionSkipSchool;
  ;