/** @jsxImportSource theme-ui */
// @ts-ignore
import  { AwesomeButton } from "react-awesome-button";
import { Box } from "@theme-ui/components";
import "react-awesome-button/dist/styles.css";
import React from "react";

const Button = React.memo(function({btnContent}: any) {
    

    return (
        <Box sx={{margin: 2}}>
            <AwesomeButton type="primary">{btnContent}</AwesomeButton>
        </Box>
        
    );
  });
  
  export default Button;