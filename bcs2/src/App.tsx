import { ThemeProvider } from 'theme-ui'
import TitleScreen from './components/TitleScreen';
import { theme } from './styles/storeAndThemes'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PlayersBoard from './components/PlayersBoard';
import LoginScreen from './components/LoginScreen';
import ActionMain from './components/ActionMain';
import PlayerInventory from './components/PlayerInventory';
import Shop from './components/Shop';
import ActionEvent from './components/ActionEvent';
import ActionExam from './components/ActionExam';
import ActionSkippedExam from './components/ActionSkippedExam';
import ActionExtraExam from './components/ActionExtraExam';
import ActionExamResult from './components/ActionExamResult';
import ActionFinalProject from './components/ActionFinalProject';
import ActionFinalResult from './components/ActionFinalResult';
import ActionEnding from './components/ActionEnding';
function App() {

  return (    
  <ThemeProvider theme={theme}> 
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />        
            <Route path="/home" component={TitleScreen} />
            <Route path="/info" component={PlayersBoard} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/welcome" component={PlayersBoard} />
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
  );
}

export default App;
