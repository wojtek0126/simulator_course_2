/** @jsxImportSource theme-ui */

import { Box } from "@theme-ui/components";
import { useState } from "react";
import { config } from "react-spring";
import { useSpring, animated } from 'react-spring'
import { wrapperTitleText } from "../../styles/storeAndThemes";

// function AnimatedHeading({contentText}: any) {
//     const [flip, set] = useState(false)
//     const props = useSpring({
//       to: { opacity: 1 },
//       from: { opacity: 0 },
//       reset: true,
//       reverse: flip,
//       delay: 200,
//       config: config.molasses,
//       onRest: () => set(!flip),
//     })
  
//     return <animated.h1 sx={props}>{contentText}</animated.h1>
//   };

//   export default AnimatedHeading;
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
    <Box sx={wrapperTitleText}>
      <animated.h1 style={props}>Bootcamp simulator 2</animated.h1>
    </Box>
  )
  }

  export default TitleText;

