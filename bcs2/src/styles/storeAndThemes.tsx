import type { Theme } from 'theme-ui'




// themes
export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}

// elements
// containers and wrappers
export const containerMainScreen: any = {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

export const wrapperTitleScreen: any = {    
    justifyContent: 'center',
    alignItems: 'center',
    // height: '30vh',
    flexDirection: 'column',
};