import React from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';
import Alert from '../../components/Alert';
import { hideHatDescriptionAlert } from '../../actions/hatAction';

class HatScreen extends React.Component {
  componentDidUpdate = () => {
    const { isDescriptionAlert } = this.props;
    localStorage.setItem('hat', JSON.stringify({ isDescriptionAlert }));
  };

  render() {
    const { isDescriptionAlert, hideHatDescriptionAlertAction } = this.props;
    return (
      <Container>
        {isDescriptionAlert && (
          <Alert
            text="Не можешь что-то выбрать? Напиши варианты и кинь в шапку, а она решит за тебя!"
            handleClick={hideHatDescriptionAlertAction}
          />
        )}
        <h1>Ожидается в скором времени!</h1>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { isDescriptionAlert } = state.hat;
  return { isDescriptionAlert };
};

const mapDispatchToProps = {
  hideHatDescriptionAlertAction: hideHatDescriptionAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(HatScreen);
