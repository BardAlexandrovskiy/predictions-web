import { HIDE_PREDICTION_DESCRIPTION_ALERT } from '../actions/predictionAction';

const initialState = JSON.parse(localStorage.getItem('prediction')) || {
  isDescriptionAlert: true,
};

export default function predictionReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case HIDE_PREDICTION_DESCRIPTION_ALERT:
      return { ...state, isDescriptionAlert: false };
    default:
      return state;
  }
}
