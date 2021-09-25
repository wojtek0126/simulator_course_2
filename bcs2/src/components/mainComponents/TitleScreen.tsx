/** @jsxImportSource theme-ui */
import TitleText from "../animated/TitleTextAnimated";
import PropsyBodyContainer from "../elements/atoms/PropsyBodyContainer";
import PropsyMainContainer from "../elements/atoms/PropsyMainContainer";
import PropsyTitleBox from "../elements/atoms/PropsyTitleBox";
import PropsyLinkButton from "../elements/atoms/PropsyLinkButton";

function TitleScreen() {
    return (
        <PropsyBodyContainer content={
            <PropsyMainContainer content={
                <PropsyTitleBox content={<>
                  <TitleText /> 
                  <PropsyLinkButton linkTo={'login'} buttonContent={'Start'} />   
                </>} />
            } />
        } />          
    );
  }
  
  export default TitleScreen;
 