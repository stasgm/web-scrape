import * as React from 'react';
import * as style from './style.css';
import { TodoActions } from '@redux/actions/todos';
// import { TodoItem } from '../TodoItem';
import { IRateModel } from '@models';

export interface IProps {
  todos: ITodoModel[];
  actions: TodoActions;
}

export class Rates extends React.Component<IProps> {
  public render() {
    const { todos, actions } = this.props;
    return (
      <section className={style.main}>
        {this.renderToggleAll()}
        <ul className={style.normal}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={actions.completeTodo}
              deleteTodo={actions.deleteTodo}
              editTodo={actions.editTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}
