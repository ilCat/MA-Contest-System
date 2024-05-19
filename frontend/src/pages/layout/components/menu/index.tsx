import './styles.scss'

import { useContext, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { getUserMenu, MenuItems, MENU_ITEMS } from '../../../../services/menu'
import MenuItem from './menu-item'
import MenuItemBottom from './menu-item-bottom'
import MenuLogo from './menu-logo'
import { Header } from 'antd/es/layout/layout'


interface IMenuProps {
  visible: boolean
  isCollapsed?: boolean
  isActive?: string
}

const Menu = ({ visible, isCollapsed = false }: IMenuProps) => {
  const [collapsed, setCollapsed] = useState(isCollapsed)
  const [activeItem, setActiveItem] = useState<string>()
  const { user, logout } = useContext(AuthContext)

  const CollapseStatusIcon = collapsed ? 'chevron-right' : 'chevron-left'
  const isCollapseClassName = collapsed ? 'menu-collapsed' : ''
  let ITEMS: MenuItems[] = MENU_ITEMS
  // if (user) ITEMS = getUserMenu(user)

  return (
    <div className={`menu`}>
      <MenuLogo visible={true} />
      {/* {visible &&  */}
          <ul className="menu-list">
            {/* <SiteSelector visible={true} /> */}
            {ITEMS.map(item => (
              <MenuItem
                key={'menu-' + item.text}
                text={item.text}
                icon={item.icon}
                link={item.link}
                visible={item.visible}
                isActive={activeItem === item.text}
                isCollapsed={collapsed}
                onClick={() => setActiveItem(item.text)}
              />
            ))}
          </ul>
          <ul className="menu-bottom">
            <MenuItemBottom
              icon="sign-out"
              link="/"
              visible={true}
              description={'Sign Out'}
              onClick={() => logout()}
            />
          </ul>
      {/* } */}
       </div>
  )
}

export default Menu
