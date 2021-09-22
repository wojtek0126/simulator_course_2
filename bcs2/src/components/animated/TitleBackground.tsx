import {  Circle } from 'react-konva';
import Konva from 'konva';
import { useState } from 'react';

const ColoredRect = () => {
    const [color, setColor] = useState('gold');
    
    const handleClick = () => {
     setColor(Konva.Util.getRandomColor());
    };  
    
    const randomInRange = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

      return (
        <Circle
          x={100}
          y={100}
          width={50}
          height={50}
          fill={color}
          shadowBlur={5}
          draggable
          onClick={handleClick}
           onDragEnd={() => {
        setColor(Konva.Util.getRandomColor());
      }}
        />
      );    
  }

  export default ColoredRect;