/** @jsxImportSource theme-ui */
import { Box, Flex } from "@theme-ui/components";
import { Container } from "theme-ui";
import { containerMainScreen, wrapperTitleScreen } from "../../styles/storeAndThemes";
import { Stage, Layer } from 'react-konva';
import {   
    Link
  } from "react-router-dom";
import ColoredRect from "../animated/TitleBackground";
import Button from "../elements/Button";
import TitleText from "../animated/TitleTextAnimated";

function TitleScreen() {
    return (<>
    <Box sx={{position: 'absolute'}}>
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>         
               <ColoredRect />               
            </Layer>  
        </Stage>
    </Box>
   

        <Container>
                <Flex sx={containerMainScreen}>
                    <Flex sx={wrapperTitleScreen}>          
                        <TitleText />
                            <Link to="/login">
                                <Button btnContent={'Start'}/>
                            </Link> 
                    </Flex>
                </Flex>          
        </Container>   
    </>);
  }
  
  export default TitleScreen;
 