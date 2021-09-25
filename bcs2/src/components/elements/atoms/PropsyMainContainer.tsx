/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from 'theme-ui'

function PropsyMainContainer({content}: any) {
    return (
    <Flex sx={{
        // background: `url(${mobileBackgroundTitle})`, 
        backgroundColor: 'boxBackground',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '98%',  
        border: '1px solid',
        margin: 2,
        borderColor: 'bodyBorder',
        boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
        "@media (max-width: 780px)": { 
            // alignItems: 'flex-start'          
         }  
    }}>
     {content}
    </Flex>      
    );
  };
  
  export default PropsyMainContainer;