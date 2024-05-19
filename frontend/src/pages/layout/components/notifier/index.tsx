import './styles.scss'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo, useContext } from 'react'

import { AuthContext } from '../../../../context/AuthContext'

const Notifier = memo(function Notifier() {
  const { notification } = useContext(AuthContext)
  let styles = notification?.visible ? 'notifier show' : 'notifier hide'
  let icon
  switch (notification?.type) {
    case 'error':
      styles += ' error'
      icon = 'thumbs-down'
      break
    case 'success':
      styles += ' success'
      icon = 'thumbs-up'
      break
    case 'info':
      styles += ' info'
      icon = 'info'
      break
    case 'warning':
      styles += ' warning'
      icon = 'exclamation-triangle'
      break
    default:
      styles += ' info'
  }

  return (
    notification && (
      <div className={styles}>
        <FontAwesomeIcon icon={icon as IconProp} />
        {'  '}
        {notification.message}
      </div>
    )
  )
})
export default Notifier
