import React from 'react';
import {
  Container,
  ScoreboardAnswers,
  AnsverText,
  AnswerButton,
  MagicBall,
  ReloadButton,
} from './styles';
import getRandomInt from '../../constants/getRandomIntFunction';
import magicBallAnswersArr from '../../constants/magicBallAnswersArr';

class CrystalBallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 'Спроси меня!',
      textOpacity: 1,
      disabledButton: false,
      translateY: 0,
    };
  }

  getAnswer = () => {
    this.setState({ disabledButton: true });
    let opacity = 1;
    let translate = 0;
    let translateReverse = false;
    let intervalId = setInterval(() => {
      if (translate < 12 && !translateReverse) {
        translate += 2;
        this.setState({ translateY: translate });
        if (translate === 12) {
          translateReverse = true;
        }
      } else if (translate >= -12 && translateReverse) {
        translate -= 2;
        this.setState({ translateY: translate });
        if (translate === -12) {
          translateReverse = false;
        }
      }
      if (opacity > 0) {
        opacity -= 0.02;
        this.setState({ textOpacity: opacity });
      } else {
        clearInterval(intervalId);
        this.setState({
          answer: magicBallAnswersArr[getRandomInt(21)],
          translateY: 0,
        });
        intervalId = setInterval(() => {
          if (opacity < 1) {
            opacity += 0.025;
            this.setState({ textOpacity: opacity });
          } else {
            clearInterval(intervalId);
            this.setState({ disabledButton: false });
          }
        }, 20);
      }
    }, 20);
  };

  reloadPage = () => {
    this.setState({ answer: 'Спроси меня!' });
  };

  render() {
    const { answer, textOpacity, disabledButton, translateY } = this.state;
    return (
      <Container>
        <ReloadButton onClick={this.reloadPage} disabled={disabledButton}>
          Перезагрузка
        </ReloadButton>
        <MagicBall translateY={translateY}>
          <ScoreboardAnswers>
            <AnsverText opacity={textOpacity}>{answer}</AnsverText>
          </ScoreboardAnswers>
        </MagicBall>
        <AnswerButton onClick={this.getAnswer} disabled={disabledButton}>
          Получить ответ
        </AnswerButton>
      </Container>
    );
  }
}

export default CrystalBallScreen;
