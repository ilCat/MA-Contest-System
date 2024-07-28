import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import {  Layout, Menu } from 'antd'
import { teamItems, ITeamItems } from './data';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

const { Header, Content,  Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


const items: MenuItem[] = teamItems.map(i => getItem(i.title, i.order, i.icon))

const TeamAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ITeamItems>(teamItems[0])

 const  selectionChange=(e: any)=>{
    const item: MenuItem = items.filter(i => i?.key == e.key)[0]
    const render = teamItems.filter(i => i.order == e.key)[0]

    setSelectedItem(render)
    console.log( render)

  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={selectionChange} />
      </Sider>
      <Layout>
       <Content style={{ margin: '0 16px' }}>
        {selectedItem.render}
        </Content>
      </Layout>
    </Layout>
  );
};

export default TeamAdmin