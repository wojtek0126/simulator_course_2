/** @jsxImportSource theme-ui */
import React from 'react';
import { Input } from 'theme-ui'

const PropsyInput = React.memo(function({type, text, onChange, placeholder}: any) {
    return (
      <Input type={type}
             onChange={onChange}
             placeholder={placeholder}
      sx={{
        maxWidth: '95%',
        marginBottom: 1,
        borderRadius: 0,
        backgroundColor: 'inputBackground',
        color: 'textWhite'
      }}
      value={text} />     
    );
  });
  
  export default PropsyInput;