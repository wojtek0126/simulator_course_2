import { Container, Flex, ThemeProvider } from 'theme-ui'
import TitleScreen from './components/TitleScreen';
import { containerMainScreen, theme } from './styles/storeAndThemes'
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Flex sx={containerMainScreen}>
          <TitleScreen />
        </Flex>        
      </Container>
  </ThemeProvider>
  );
}

export default App;
