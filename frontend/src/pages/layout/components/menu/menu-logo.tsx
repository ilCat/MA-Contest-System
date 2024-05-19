import './styles.scss'

import logoFitesa from '../../../../assets/martial-arts-fighter-low-poly.svg'

interface IMenuProps {
  visible: boolean
}

const MenuLogo = ({ visible = true }: IMenuProps) => {
  return <>{visible && <img src={logoFitesa} alt="logo" className="menu-logo" />}</>
}

export default MenuLogo
