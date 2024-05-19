import './styles.scss'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuProps{
  visible: boolean
  text: string
  icon: IconProp
  link: string
  isActive?: boolean
  isCollapsed?: boolean
  description?:string | null
  onClick?: MouseEventHandler
}
const MenuItem = ({ visible, text, icon, link, isActive, isCollapsed, description, onClick }: IMenuProps) => {
  const isActiveClass = isActive ? 'menu-item-active' : ''
  const isCollapsedClass = isCollapsed ? 'menu-item-collapsed' : ''
  const textLink = !isCollapsed ? text : ''
  return (
    <>
      {visible && (
        <li
          className={`menu-item ellipsis ${isActiveClass} ${isCollapsedClass}`}
          title={description ?? text}
          {...(onClick && { onClick: onClick })}
        >
          <NavLink to={link}>
            {icon && <FontAwesomeIcon icon={icon} className="menu-icon" />}
            {textLink}
          </NavLink>
        </li>
      )}
    </>
  )
}

export default MenuItem
