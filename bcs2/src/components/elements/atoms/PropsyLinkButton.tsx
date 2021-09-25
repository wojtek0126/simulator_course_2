/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import { Box } from "@theme-ui/components";
import "react-awesome-button/dist/styles.css";
import React from "react";
import PropsyButton from "./PropsyButton";

function PropsyLinkButton({buttonContent, linkTo, margin, onClick}: any) {    

    return (
        <Box sx={{margin: `${margin}`}}>
          <Link to={`${linkTo}`}>
              <PropsyButton onClick={onClick} buttonContent={buttonContent}/>
          </Link> 
        </Box>        
    );
  };
  
  export default PropsyLinkButton;