import React from 'react';
import logo from './logo.svg';
/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import PropsyButton from '../elements/PropsyButton';
import { containerLoginScreen, wrapperBtnExit } from '../../styles/storeAndThemes';
import { Flex } from 'theme-ui';
import PropsyContainer from '../elements/PropsyContainer';
import PropsyExitWithLink from '../elements/PropsyExitWithLink';

function ActionExam() {
  return (
    <PropsyContainer content={
      <Flex sx={containerLoginScreen}>
         <PropsyExitWithLink />
      </Flex>
    } />
  );
}

export default ActionExam;
