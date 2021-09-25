import React from 'react';
import logo from './logo.svg';
/** @jsxImportSource theme-ui */
import { containerLoginScreen, wrapperBtnExit } from '../../styles/storeAndThemes';
import { Flex } from 'theme-ui';
import PropsyBodyContainer from '../elements/atoms/PropsyBodyContainer';
import PropsyBoxWithExitBtn from '../elements/atoms/PropsyBoxWithExitBtn';

function ActionExam() {
    return (
      <PropsyBodyContainer content={
        <Flex sx={containerLoginScreen}>
         <PropsyBoxWithExitBtn />
        </Flex>
      } />
    );
  }

export default ActionExam;
