/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import { Flex } from "theme-ui";
import { containerLoginScreen, wrapperBtnExit } from "../../styles/storeAndThemes";
import PropsyButton from "../elements/PropsyButton";
import PropsyContainer from "../elements/PropsyContainer";

function PropsyExitWithLink({linkTo = '/home'}: any) {
    return (
      <PropsyContainer content={
        <Flex sx={containerLoginScreen}>
          <Flex sx={wrapperBtnExit}>
            <Link to={linkTo}>
              <PropsyButton btnContent={'Exit'} />
            </Link>           
          </Flex>
        </Flex>
      } />
    );
  }
  
  export default PropsyExitWithLink;