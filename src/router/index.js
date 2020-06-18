import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import crystalBallScreen from '../screens/CrystalBallScreen';
import PredictionScreen from '../screens/PredictionScreen';
import HatScreen from '../screens/HatScreen';

const Router = () => {
  return (
    <HashRouter>
      <Redirect to="/crystalBall" />
      <Route path="/crystalBall" component={crystalBallScreen} />
      <Route path="/prediction" component={PredictionScreen} />
      <Route path="/hat" component={HatScreen} />
      <Footer />
    </HashRouter>
  );
};

export default Router;
