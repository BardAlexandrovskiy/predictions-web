import { HIDE_HAT_DESCRIPTION_ALERT } from '../actions/hatAction';

const initialState = JSON.parse(localStorage.getItem('hat')) || {
  isDescriptionAlert: true,
};

export default function hatReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case HIDE_HAT_DESCRIPTION_ALERT:
      return { ...state, isDescriptionAlert: false };
    default:
      return state;
  }
}
