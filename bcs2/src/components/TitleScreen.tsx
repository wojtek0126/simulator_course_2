/** @jsxImportSource theme-ui */


import { Flex } from "@theme-ui/components";
import Button from "../elements/Button";
import { wrapperTitleScreen } from "../styles/storeAndThemes";
import TitleText from "./animated/TitleTextAnimated";

function TitleScreen() {
    return (
      <Flex sx={wrapperTitleScreen}>          
          <TitleText />
          <Button btnContent={'Start'}/>
      </Flex>
    );
  }
  
  export default TitleScreen;