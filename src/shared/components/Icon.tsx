import * as icons from 'react-bootstrap-icons'

export interface IconProps extends icons.IconProps {
  // Cannot use "name" as it is a valid SVG attribute
  // "iconName", "filename", "icon" will do it instead
  iconName: keyof typeof icons
}

/**
 * Created from {@link https://www.npmjs.com/package/react-bootstrap-icons}
 * @param iconName type of {@link icons}
 * @param props from {@link icons}
 * @constructor
 */
const Icon = ({ iconName, ...props }: IconProps) => {
  const BootstrapIcon = icons[iconName]
  return <BootstrapIcon {...props} />
}

export default Icon
