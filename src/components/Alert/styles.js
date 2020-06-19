import styled from 'styled-components';

export const LockContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 60px;
  left: 0;
  z-index: 5;
  background-color: rgba(128, 128, 128, 0.5);
`;

export const AlertContainer = styled.div`
  display: flex;
  background-color: #244375;
  width: 50%;
  min-height: 450px;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;

  @media (max-width: 736px) {
    width: 90%;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const Button = styled.button`
  background-color: #3c6dc3;
  color: white;
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 20px;
`;
