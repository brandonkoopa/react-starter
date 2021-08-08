import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <h1>
      <FormattedMessage id="app.title"
        defaultMessage="Let's make some magic!"
        description="App title"
      />
    </h1>
  );
}

export default App;