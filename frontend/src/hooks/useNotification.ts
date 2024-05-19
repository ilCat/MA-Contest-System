import { useState } from 'react'
import { MenuItems } from '../services/menu'

export type INotification = {
  type: 'error' | 'success' | 'info' | 'warning'
  message: string
  visible?: boolean
  closable?: boolean
  timeout?: number
}

export const useNotification = () => {
  const [notification, setNotification] = useState<INotification>({ visible: false, type: 'info', message: '' })

  const showNotification = (notification: INotification) => {
    setNotification({
      visible: true,
      type: notification.type,
      message: notification.message,
      closable: notification.closable
    })
    setTimeout(() => {
      setNotification({
        visible: false,
        type: notification.type,
        message: notification.message,
        closable: notification.closable
      })
    }, notification.timeout ?? 5000)
  }
  return { notification, showNotification }
}
