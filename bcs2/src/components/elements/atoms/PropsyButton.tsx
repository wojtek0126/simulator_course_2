/** @jsxImportSource theme-ui */
// @ts-ignore
import  { AwesomeButton } from "react-awesome-button";
import { Box, Button, Flex } from "@theme-ui/components";
import "react-awesome-button/dist/styles.css";
import React from "react";

function PropsyButton({buttonContent, buttonAlign = 'center', style = "primary", type, disabled, onClick}: any) {    

    return (
        <Flex sx={{
            margin: 2,
            justifyContent: `${buttonAlign}`}}>
            <Button sx={{display: 'contents'}} type={type} disabled={disabled}
            ><AwesomeButton type={style} onPress={onClick}>{buttonContent}</AwesomeButton>
            </Button>
        </Flex>
        
    );
  };
  
  export default PropsyButton;