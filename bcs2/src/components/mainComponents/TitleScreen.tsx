/** @jsxImportSource theme-ui */
import { Box, Flex } from "@theme-ui/components";
import { Container } from "theme-ui";
import { containerMainScreen, wrapperTitleScreen } from "../../styles/storeAndThemes";
import { Stage, Layer } from 'react-konva';
import { Link } from "react-router-dom";
import ColoredRect from "../animated/TitleBackground";
import Button from "../elements/PropsyButton";
import TitleText from "../animated/TitleTextAnimated";
import PropsyContainer from "../elements/PropsyContainer";

function TitleScreen() {
    return (<>
        <PropsyContainer content={ 
            <Flex sx={containerMainScreen}>
                <Flex sx={wrapperTitleScreen}>          
                    <TitleText />
                    <Link to="/login">
                        <Button btnContent={'Start'}/>
                    </Link> 
                </Flex>
            </Flex>   
        } />         
         
    </>);
  }
  
  export default TitleScreen;
 