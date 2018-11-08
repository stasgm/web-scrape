import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { RoutesEnum } from '@common/config/router.config';

export const Linkmenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu mode="horizontal" selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="appstore" />
          Главная
        </Link>
      </Menu.Item>
      <Menu.Item key={RoutesEnum.Rates}>
        <Link to={RoutesEnum.Rates}>Rates</Link>
      </Menu.Item>
      <Menu.Item key={RoutesEnum.Games}>
        <Link to={RoutesEnum.Games}>Games</Link>
      </Menu.Item>
    </Menu>
  );
});
