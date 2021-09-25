/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui";
import { containerLoginScreen } from "../../styles/storeAndThemes";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyBox from "../elements/atoms/PropsyBox";
import PropsyBoxWithExitBtn from "../elements/atoms/PropsyBoxWithExitBtn";

function InfoScreen() {
  return (
    <PropsyBodyContainer content={
      <Flex sx={containerLoginScreen}>
       <PropsyBoxWithExitBtn /> 
       <PropsyBox />
      </Flex>
    } />
  );
}

export default InfoScreen;
