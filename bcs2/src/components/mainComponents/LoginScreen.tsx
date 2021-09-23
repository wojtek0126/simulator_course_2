/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import { containerLoginScreen, wrapperBtnExit } from "../../styles/storeAndThemes";
import PropsyButton from "../elements/PropsyButton";
import PropsyContainer from "../elements/PropsyContainer";
import { Link } from "react-router-dom";

function LoginScreen() {
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
  
  export default LoginScreen;