import * as React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import { ActionTypes } from '@redux/actions';

export interface IProps {
  addTodo: typeof ActionTypes.addTodo;
}

export class Header extends React.Component<IProps> {
  constructor(props: IProps, context?: any) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }

  public handleSave(text: string) {
    if (text.length) {
      this.props.addTodo({ text });
    }
  }

  public render() {
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo={true}
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
