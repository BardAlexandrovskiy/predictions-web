import React from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';
import Alert from '../../components/Alert';
import { hidePredictionDescriptionAlert } from '../../actions/predictionAction';

class PredictionScreen extends React.Component {
  componentDidUpdate = () => {
    const { isDescriptionAlert } = this.props;
    localStorage.setItem('prediction', JSON.stringify({ isDescriptionAlert }));
  };

  render() {
    const {
      isDescriptionAlert,
      hidePredictionDescriptionAlertAction,
    } = this.props;
    return (
      <Container>
        {isDescriptionAlert && (
          <Alert
            text="Вытяни свое предсказание на день! О, почтенный!"
            handleClick={hidePredictionDescriptionAlertAction}
          />
        )}
        <h1>Ожидается в скором времени!</h1>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { isDescriptionAlert } = state.prediction;
  return { isDescriptionAlert };
};

const mapDispatchToProps = {
  hidePredictionDescriptionAlertAction: hidePredictionDescriptionAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PredictionScreen);
