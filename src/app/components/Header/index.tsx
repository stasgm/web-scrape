import * as React from 'react';

export const Header = () => {
  return (
    <header>
      <h1>Курсы валют на {new Date().toLocaleDateString()}</h1>
    </header>
  );
};
