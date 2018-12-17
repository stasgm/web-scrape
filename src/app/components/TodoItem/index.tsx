import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { ITodoModel } from '@models';
import { ActionTypes } from '@redux/actions';
import { TodoTextInput } from '../TodoTextInput';

export interface IProps {
  todo: ITodoModel;
  editTodo: typeof ActionTypes.editTodo;
  deleteTodo: typeof ActionTypes.deleteTodo;
  completeTodo: typeof ActionTypes.completeTodo;
}

export interface IState {
  editing: boolean;
}

export class TodoItem extends React.Component<IProps, IState> {
  constructor(props: IProps, context?: any) {
    super(props, context);
    this.state = { editing: false };
  }

  public handleDoubleClick() {
    this.setState({ editing: true });
  }

  public handleSave(id: number, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo({ id, text });
    }
    this.setState({ editing: false });
  }

  public render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => todo.id && this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className={style.view}>
          <input
            className={style.toggle}
            type="checkbox"
            checked={todo.completed}
            onChange={() => todo.id && completeTodo(todo.id)}
          />
          <label onDoubleClick={() => this.handleDoubleClick()}>{todo.text}</label>
          <button
            className={style.destroy}
            onClick={() => {
              if (todo.id) deleteTodo(todo.id);
            }}
          />
        </div>
      );
    }

    // TODO: compose
    const classes = classNames({
      [style.completed]: todo.completed,
      [style.editing]: this.state.editing,
      [style.normal]: !this.state.editing
    });

    return <li className={classes}>{element}</li>;
  }
}
