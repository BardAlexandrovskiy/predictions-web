import React from 'react';
import { FooterContainer, Link } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/">Magic 8 ball</Link>
      <Link to="/prediction">Предсказания</Link>
      <Link to="/hat">Шапка</Link>
    </FooterContainer>
  );
};

export default Footer;
