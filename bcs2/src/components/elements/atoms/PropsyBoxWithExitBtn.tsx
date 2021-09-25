/** @jsxImportSource theme-ui */
import firebase from "firebase/compat";
import { Link } from "react-router-dom";
import { Flex } from "theme-ui";
import PropsyButton from "./PropsyButton";

function PropsyBoxWithExitBtn({linkTo = '/home'}: any) {

  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem('userName');
   }

    return (          
          <Flex sx={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start', 
                    width: '100%',
                }}>
            <Link to={linkTo}>
              <PropsyButton buttonContent={'Exit'} onClick={signOut} />              
            </Link>           
          </Flex>     
      );  
  };
  
  export default PropsyBoxWithExitBtn;