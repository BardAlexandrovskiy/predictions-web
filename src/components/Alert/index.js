import React from 'react';
import { LockContainer, AlertContainer, Description, Button } from './styles';

const Alert = ({ text, handleClick }) => {
  return (
    <LockContainer>
      <AlertContainer>
        <Description>{text}</Description>
        <Button onClick={() => handleClick()}>Ок</Button>
      </AlertContainer>
    </LockContainer>
  );
};

export default Alert;
