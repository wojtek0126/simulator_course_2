
import { Stage, Layer } from 'react-konva';
/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'


function PropsyCanvas({content}: any) {
    return (
        <Box sx={{position: 'absolute'}}>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>         
                 {content}             
                </Layer>  
            </Stage>        
        </Box> 
    );
  }
  
  export default PropsyCanvas;