/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import { useState } from "react";
import { config } from "react-spring";
import { useSpring, animated } from 'react-spring'


function TitleText() {
    const [flip, set] = useState(false)
    
    const props = useSpring({
        to: { transform: 'scale(1.3)' },
        from: { transform: 'scale(1)' },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
      })
    return (
    <Flex sx={{ 
      // overflow: 'hidden',
      marginTop: 1,
      marginBottom: 1,
      fontFamily: 'body',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'textBlack',  
      "@media (max-width: 780px)": { 
          fontSize: '0.6em'          
       }  
  }}>
      <animated.h1 style={props}>Bootcamp simulator 2</animated.h1>
    </Flex>
  )
  }

  export default TitleText;

