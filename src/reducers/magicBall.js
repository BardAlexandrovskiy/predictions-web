import { HIDE_MAGIC_BALL_DESCRIPTION_ALERT } from '../actions/magicBallAction';

const initialState = JSON.parse(localStorage.getItem('magicBall')) || {
  isDescriptionAlert: true,
};

export default function magicBallReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case HIDE_MAGIC_BALL_DESCRIPTION_ALERT:
      return { ...state, isDescriptionAlert: false };
    default:
      return state;
  }
}
