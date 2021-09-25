/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import "react-awesome-button/dist/styles.css";

function PropsyButtonWrapper({content}: any) {    

    return (
        <Flex sx={{
                   alignitems: 'center', 
                   justifyContent: 'center'}}>
        {content}
      </Flex>   
    );
  };
  
  export default PropsyButtonWrapper;