import './styles.scss'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NoDataResult = ({ message, icon, spin }: { message: string | undefined; icon?: string; spin?: boolean }) => {
  return (
    <div className="report-no-data">
      {icon && <FontAwesomeIcon icon={icon as IconProp} spin={spin} className="report-no-data-icon" size="lg" />}
      <span>{message ? message : 'We have problems. Can you try later'}</span>
    </div>
  )
}

export default NoDataResult
