import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames';
import { Filter } from '@models';

export const FILTER_TITLES = {
  [Filter.SHOW_ALL]: 'All',
  [Filter.SHOW_ACTIVE]: 'Active',
  [Filter.SHOW_COMPLETED]: 'Completed'
};

export interface IProps {
  filter: Filter;
  activeCount?: number;
  completedCount?: number;
  onClickFilter: (filter: Filter) => any;
  onClickClearCompleted: () => any;
}

export class Footer extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    activeCount: 0,
    completedCount: 0
  };

  public renderTodoCount(): JSX.Element {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  public renderFilterLink(filter: Filter): JSX.Element {
    const { filter: selectedFilter, onClickFilter } = this.props;

    return (
      <a
        className={classNames({ [style.selected]: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onClickFilter(filter)}
        children={FILTER_TITLES[filter]}
      />
    );
  }

  public renderClearButton(): JSX.Element | void {
    const { completedCount, onClickClearCompleted } = this.props;
    if (completedCount === 0) return;
      return (
        <button
          className={style.clearCompleted}
          onClick={onClickClearCompleted}
          children={'Clear completed'}
        />
      );
  }

  public render() {
    return (
      <footer className={style.normal}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {(Object.keys(Filter) as Array<keyof typeof Filter>).map((key) => (
            <li key={key} children={this.renderFilterLink(Filter[key])} />
          ))}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}
