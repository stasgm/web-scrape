import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { TodoActions, ActionTypes } from '@redux/actions';
import { IRootState, TodoState } from '@redux/reducers';
import { Filter, ITodoModel } from '@models';
import { omit } from 'app/utils';
import { Header, TodoList, Footer } from 'app/components';

const FILTER_VALUES = (Object.keys(Filter) as Array<keyof typeof Filter>).map((key) => Filter[key]);

const FILTER_FUNCTIONS: Record<Filter, (todo: ITodoModel) => boolean> = {
  [Filter.SHOW_ALL]: () => true,
  [Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
  [Filter.SHOW_COMPLETED]: (todo) => todo.completed
};

export interface IProps extends RouteComponentProps<void> {
  todos: TodoState;
  actions: TodoActions;
  filter: Filter;
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, 'todos' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || Filter.SHOW_ALL;
    return { todos: state.todos, filter };
  },
  (dispatch: Dispatch): Pick<IProps, 'actions'> => ({
    actions: bindActionCreators(omit(ActionTypes, 'Type'), dispatch)
  })
)
export class App extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    filter: Filter.SHOW_ALL
  };

  constructor(props: IProps, context?: any) {
    super(props, context);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  public handleClearCompleted(): void {
    const hasCompletedTodo = this.props.todos.some((todo: any) => todo.completed || false);
    if (hasCompletedTodo) {
      this.props.actions.clearCompleted();
    }
  }

  public handleFilterChange(filter: Filter): void {
    this.props.history.push(`#${filter}`);
  }

  public render() {
    const { todos, actions, filter } = this.props;
    const activeCount = todos.length - todos.filter((todo: any) => todo.completed).length;
    const filteredTodos = filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos;
    const completedCount = todos.reduce(
      (count: any, todo: any) => (todo.completed ? count + 1 : count),
      0
    );

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <TodoList todos={filteredTodos} actions={actions} />
        <Footer
          filter={filter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClickClearCompleted={this.handleClearCompleted}
          onClickFilter={this.handleFilterChange}
        />
      </div>
    );
  }
}
