import * as React from 'react';
import { Linkmenu } from '../Linkmenu';

export const Header = () => {
  return (
    <header>
      <h1>Курсы валют на {new Date().toLocaleDateString()}</h1>
      <Linkmenu />
    </header>
  );
};
