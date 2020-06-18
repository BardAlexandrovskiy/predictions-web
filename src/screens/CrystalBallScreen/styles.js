import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
`;

export const MagicBall = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 200px;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top right, black 33%, #171717 66%, gray 100%);
  transform: translateY(${(props) => props.translateY}px);

  @media (max-width: 736px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 300px;
  }
`;

export const ScoreboardAnswers = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 5px;

  @media (max-width: 360px) {
    width: 185px;
    height: 185px;
  }
`;

export const AnsverText = styled.p`
  color: black;
  opacity: ${(props) => props.opacity};
  font-size: 20px;
  line-height: 20px;

  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const AnswerButton = styled.button`
  background-color: lightgray;
  padding: 20px 40px;
  border-radius: 10px;
  color: black;
  font-size: 20px;
`;

export const ReloadButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: #3c6fc2;
  color: white;
  font-size: 20px;
  align-self: flex-end;
`;
