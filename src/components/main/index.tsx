import React from 'react';
import { Scrape } from '@src/components/scrape';

export class App extends React.PureComponent<any, any> {
  public render() {
    return (
      <div className="App">
        <Scrape />
      </div>
    );
  }
}
