import * as React from 'react';

export class LoadingComponent extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  public render() {
    return <div>Loading...</div>;
  }
}
