import type { Theme } from 'theme-ui'


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
    boxBackground: 'rgb(31, 122, 122)',
    containerBackround: '#fff',
    primary: '#33e',
    bodyBorder: '#000'
  }  
}

// elements
// containers and wrappers
export const containerMainScreen: any = {
    // background: `url(${mobileBackgroundTitle})`, 
    backgroundColor: 'boxBackground',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  
    border: '1px solid',
    margin: 2,
    borderColor: 'bodyBorder',
    boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
    "@media (max-width: 780px)": { 
        alignItems: 'flex-start'          
     }  
};

export const containerLoginScreen: any = {
    // background: `url(${mobileBackgroundTitle})`, 
    backgroundColor: 'boxBackground',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100vh',  
    border: '1px solid',
    margin: 2,
    borderColor: 'bodyBorder',
    boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
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
    fontFamily: 'body',
    textAlign: 'center',
    // maxWidth: '80vw',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'textBlack',  
    "@media (max-width: 780px)": { 
        fontSize: '0.6em'          
     }  
};

export const wrapperBtnExit = {
    justifyContent: 'flex-end',
    alignItems: 'flex-start', 
    width: '100%'       
}