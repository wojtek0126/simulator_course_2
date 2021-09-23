/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui'


function PropsyContainer({content}: any) {
    return (
      <Container sx={{
          boxSizing: 'border-box',
          width: "100%",
          height: '100%',
          padding: 2,        
          backgroundColor: 'containerBackround'
      }}>
          {content}
      </Container>     
    );
  }
  
  export default PropsyContainer;