import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  height: 60px;
  background-color: #3c6fc2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  color: white;
  text-decoration: none;
  width: 33.33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, opacity 0.2s;

  @media (max-width: 736px) {
    font-size: 17px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;
