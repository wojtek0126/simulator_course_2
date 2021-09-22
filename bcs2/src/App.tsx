import { ThemeProvider } from 'theme-ui'
import TitleScreen from './components/TitleScreen';
import { theme } from './styles/storeAndThemes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PlayersBoard from './components/PlayersBoard';
function App() {

  return (    
  <ThemeProvider theme={theme}> 
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />        
            <Route path="/home" component={TitleScreen} />
            <Route path="/board" component={PlayersBoard} />
        </Switch>
    </Router>
  </ThemeProvider>
  );
}

export default App;
