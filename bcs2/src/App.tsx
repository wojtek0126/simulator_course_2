import { ThemeProvider } from 'theme-ui';
import {  RecoilRoot } from 'recoil';
import TitleScreen from './components/mainComponents/TitleScreen';
import { theme } from './styles/storeAndThemes';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PlayersBoard from './components/mainComponents/PlayersBoard';
import LoginScreen from './components/mainComponents/LoginScreen';
import WelcomeScreen from './components/mainComponents/WelcomeScreen';
import ActionMain from './components/mainComponents/ActionMain';
import PlayerInventory from './components/mainComponents/PlayerInventory';
import Shop from './components/mainComponents/Shop';
import ActionEvent from './components/mainComponents/ActionEvent';
import ActionExam from './components/mainComponents/ActionExam';
import ActionSkippedExam from './components/mainComponents/ActionSkippedExam';
import ActionExtraExam from './components/mainComponents/ActionExtraExam';
import ActionExamResult from './components/mainComponents/ActionExamResult';
import ActionFinalProject from './components/mainComponents/ActionFinalProject';
import ActionFinalResult from './components/mainComponents/ActionFinalResult';
import ActionEnding from './components/mainComponents/ActionEnding';

function App() {

  return (  
  <RecoilRoot> 
    <ThemeProvider theme={theme}> 
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />        
              <Route path="/home" component={TitleScreen} />
              <Route path="/info" component={PlayersBoard} />
              <Route path="/login" component={LoginScreen} />
              <Route path="/welcome" component={WelcomeScreen} />
              <Route path="/board" component={PlayersBoard} />
              <Route path="/action" component={ActionMain} />
              <Route path="/inventory" component={PlayerInventory} />
              <Route path="/shop" component={Shop} />
              <Route path="/event" component={ActionEvent} />
              <Route path="/exam" component={ActionExam} />
              <Route path="/skipped" component={ActionSkippedExam} />
              <Route path="/extra" component={ActionExtraExam} />
              <Route path="/result" component={ActionExamResult} />
              <Route path="/final" component={ActionFinalProject} />
              <Route path="/finalres" component={ActionFinalResult} />
              <Route path="/ending" component={ActionEnding} />           
          </Switch>
      </Router>
    </ThemeProvider>
  </RecoilRoot> 
  );
}

export default App;
