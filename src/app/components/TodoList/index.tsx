import * as React from 'react';
import * as style from './style.css';
import { TodoActions } from '@redux/actions/todos';
import { TodoItem } from '../TodoItem';
import { ITodoModel } from '@models';

  export interface IProps {
    todos: ITodoModel[];
    actions: TodoActions;
  }

export class TodoList extends React.Component<IProps> {
  public renderToggleAll(): JSX.Element | void {
    const { todos, actions } = this.props;
    if (todos.length === 0) return;
      const hasIncompleted = todos.some((todo) => !todo.completed);
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={hasIncompleted}
          onChange={actions.completeAll}
        />
      );
  }

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
