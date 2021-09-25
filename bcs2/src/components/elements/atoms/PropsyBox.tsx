/** @jsxImportSource theme-ui */
import "react-awesome-button/dist/styles.css";
import React from "react";
import { Flex } from "theme-ui";

function PropsyBox({content,
                    width,
                    height,
                    flexDirection = 'column',
                    justifyContent = 'center',
                    margin = 'auto',
                    position = 'unset',
                    top = 3
                 }: any) {   

    return (
    <Flex sx={{
        position: position,
        top: `${top}`,
        textAlign: 'center',
        margin: `${margin}`,
        padding: 1,
        justifyContent: `${justifyContent}`,
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