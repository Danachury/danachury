import { Icon } from './index'
import { IconProps } from './Icon'

import './IconButton.css'

interface Props extends IconProps {
  onClick: () => void
}

const IconButton = ({ iconName, onClick }: Props) => {
  return <button className="icon-button" onClick={onClick}>
    <Icon iconName={iconName}/>
  </button>
}

export default IconButton
