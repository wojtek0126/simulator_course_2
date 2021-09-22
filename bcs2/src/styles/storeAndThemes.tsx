import type { Theme } from 'theme-ui'
import titleBackgroundImg from '../assets/titleScreenBackground.jpg';
import mobileBackgroundTitle from '../assets/background1.png';


// themes
export const theme: Theme = {
  fonts: {
    body: '"Permanent Marker", cursive',
    heading: '"Permanent Marker", cursive',
    monospace: 'Menlo, monospace',
  },
  colors: {
    textBlack: '#000',
    textWhite: '#fff',
    background: '#fff',
    primary: '#33e',
  },
  
}

// elements
// containers and wrappers
export const containerMainScreen: any = {
    background: `url(${mobileBackgroundTitle})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  
    "@media (max-width: 780px)": { 
        alignItems: 'flex-start'          
     }  
};


export const wrapperTitleScreen: any = { 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',     
};

export const wrapperTitleText: any = { 
    marginTop: 3,
    fontFamily: '"Permanent Marker", cursive',
    textAlign: 'center',
    // maxWidth: '80vw',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'textBlack',  
    "@media (max-width: 780px)": { 
        fontSize: '0.6em'          
     }  
};
