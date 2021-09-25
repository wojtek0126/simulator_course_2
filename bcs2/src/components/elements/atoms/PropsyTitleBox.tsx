/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from 'theme-ui'


function PropsyTitleBox({content, width='100%', height}: any) {
    return (
      <Flex sx={{
          boxSizing: 'border-box',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',  
          width: `${width}`,
          height: `${height}`,                
          backgroundColor: 'containerBackround'
      }}>
          {content}
      </Flex>     
    );
  };
  
  export default PropsyTitleBox;