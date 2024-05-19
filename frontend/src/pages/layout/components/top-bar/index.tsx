import './styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../../../context/AuthContext'

const TopBar = () => {
  const { user } = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)




  return (
    <div className="top-bar">
      {loading ? (
        <div>
          <FontAwesomeIcon icon="spinner" spin /> Loading
        </div>
      ) : (
        <div>Martial Arts Constest System V0.1</div>
      )}

      {/* {user ? ( */}
        
          {/* <span>{user.name}</span> */}
          <FontAwesomeIcon icon="user" className="menu-icon" />
  
      {/* ) : null} */}
    </div>
  )
}
export default TopBar
