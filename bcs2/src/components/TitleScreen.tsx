/** @jsxImportSource theme-ui */

import { Box, Flex, Heading } from "@theme-ui/components";
import { wrapperTitleScreen } from "../styles/storeAndThemes";

function TitleScreen() {
    return (
      <Flex sx={wrapperTitleScreen}>
          <Heading>Bootcamp simulator 2</Heading>
          <button sx={{alignSelf: 'center'}}>start</button>
      </Flex>
    );
  }
  
  export default TitleScreen;