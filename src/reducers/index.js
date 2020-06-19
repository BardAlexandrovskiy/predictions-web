import { combineReducers } from 'redux';
import magicBallReducer from './magicBall';
import predictionReducer from './prediction';
import hatReducer from './hat';

const rootReducer = combineReducers({
  magicBall: magicBallReducer,
  prediction: predictionReducer,
  hat: hatReducer,
});

export default rootReducer;
