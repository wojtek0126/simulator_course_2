/** @jsxImportSource theme-ui */
import firebase from "firebase/compat";
import { Link } from "react-router-dom";
import { Flex } from "theme-ui";
import PropsyButton from "./PropsyButton";

export async function signOut() {
  await firebase.auth().signOut();
  localStorage.removeItem('userName');
 }

function PropsyBoxWithExitBtn({linkTo = 'home'}: any) {

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