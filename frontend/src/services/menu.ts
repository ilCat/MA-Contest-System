import { IconLookup, IconName, IconPrefix, IconProp } from '@fortawesome/fontawesome-svg-core'

import { User } from '../hooks/useUser'

export interface MenuItems {
  text: string
  icon: IconName | [IconPrefix, IconName] | IconLookup
  link: string
  visible: boolean
  group: string[]
}

export const  MENU_ITEMS: MenuItems[] = [
  {
    text: 'Categories',
    icon: 'ranking-star' as IconProp,
    link: '/app/categories',
    visible: true,
    group: ['']
  },
  {
    text: 'Academies',
    icon: 'school-flag' as IconProp,
    link: '/app/academies',
    visible: true,
    group: ['']
  },
  {
    text: 'Results',
    icon: 'award' as IconProp,
    link: '/app/results',
    visible: true,
    group: ['']
  },
  {
    text: 'Staff',
    icon: 'history' as IconProp,
    link: '/app/staff',
    visible: true,
    group: ['']
  },
  {
    text: 'Live',
    icon: 'trash' as IconProp,
    link: '/app/live',
    visible: true,
    group: ['']
  },
  {
    text: 'Team Admin',
    icon: 'shield' as IconProp,
    link: '/app/TeamAdmin',
    visible: true,
    group: ['TEAM-UWNER']
  },
  {
    text: 'Load Results',
    icon: 'database' as IconProp,
    link: '/app/loadData',
    visible: true,
    group: ['ORG-Staff']
  }
]

function menuVisible(arr1: string[], arr2: string[]) {
  return arr1.some(elem => arr2.includes(elem))
}

function getUserMenu(user: User): MenuItems[] {
  const userMenu: MenuItems[] = MENU_ITEMS.map(menu => {
    menu.visible = true//menuVisible(menu.group, user.memberOf)
    return menu
  })
  return userMenu
}

export { getUserMenu }
