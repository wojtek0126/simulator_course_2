/** @jsxImportSource theme-ui */
import "react-awesome-button/dist/styles.css";
import React from "react";
import { Flex } from "theme-ui";

function PropsyBox({content, width = '40vw', height = '40vh', flexDirection = 'column' }: any) {   

    return (
    <Flex sx={{ 
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: flexDirection,
        backgroundColor: 'boxBackground', 
        width: `${width}`,
        height: `${height}`,
        boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)'    
    }}>          
        {content}
    </Flex>        
    );
  };
  
  export default PropsyBox;