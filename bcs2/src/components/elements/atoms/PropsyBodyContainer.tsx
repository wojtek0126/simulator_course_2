/** @jsxImportSource theme-ui */
import React from 'react';
import { Container } from 'theme-ui'


function PropsyBodyContainer({content}: any) {
    return (
      <Container sx={{
          boxSizing: 'border-box',
          width: "100%",
          height: '100vh',
          maxHeight: '100vh',   
          maxWidth: '100%',  
          padding: 2,        
          backgroundColor: 'containerBackround'
      }}>
          {content}
      </Container>     
    );
  };
  
  export default PropsyBodyContainer;