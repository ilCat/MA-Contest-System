import './styles.scss'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuProps {
  visible: true
  text?: string
  icon?: IconProp
  link?: string
  description?:  string | null
  onClick?: MouseEventHandler
}

const MenuItemBottom = ({ visible, text, icon, link, description, onClick }: IMenuProps) => {
  return (
    <>
      {visible && (
        <li className="menu-item-bottom" title={description ?? text} {...(onClick && { onClick: onClick })}>
          {icon && <FontAwesomeIcon icon={icon} className="menu-icon" />}
          {link ? <NavLink to={link}>{text}</NavLink> : <span>{text}</span>}
        </li>
      )}
    </>
  )
}

export default MenuItemBottom
