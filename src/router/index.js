import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import CrystalBallScreen from '../screens/CrystalBallScreen';
import PredictionScreen from '../screens/PredictionScreen';
import HatScreen from '../screens/HatScreen';

const Router = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={CrystalBallScreen} />
      <Route path="/prediction" component={PredictionScreen} />
      <Route path="/hat" component={HatScreen} />
      <Footer />
    </HashRouter>
  );
};

export default Router;
