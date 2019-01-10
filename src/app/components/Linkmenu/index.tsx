import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { RoutesEnum } from 'app/common/config/router.config';

export const Linkmenu = withRouter((props: any) => {
  const { location } = props;
  return (
    <Menu mode="horizontal" selectedKeys={[location.pathname]}>
      <Menu.Item key={RoutesEnum.Root}>
        <Link to={RoutesEnum.Root}>
          <Icon type="appstore" />
          Главная
        </Link>
      </Menu.Item>
      <Menu.Item key={RoutesEnum.Rates}>
        <Link to={RoutesEnum.Rates}>
          <Icon type="bar-chart" />
          Курсы
        </Link>
      </Menu.Item>
      <Menu.Item key={RoutesEnum.Banks}>
        <Link to={RoutesEnum.Banks}>          
          Банки
        </Link>
      </Menu.Item>      
      <Menu.Item key={RoutesEnum.Currencies}>
        <Link to={RoutesEnum.Currencies}>
          <Icon type="pay-circle" />
          Валюты
        </Link>
      </Menu.Item>      
      <Menu.Item key={RoutesEnum.Map}>
        <Link to={RoutesEnum.Map}>
          <i className="fas map-marked-alt" />
          Карта
        </Link>
      </Menu.Item>
    </Menu>
  );
});
