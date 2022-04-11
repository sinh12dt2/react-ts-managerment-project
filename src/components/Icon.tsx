import { IconType } from 'react-icons';
import * as fa from 'react-icons/fa';
interface FaIcons {
  [x: string]: IconType,
}
const faIcons: FaIcons = fa;

interface IconProps {
  iconName: string,
  className?: string,
  width?: number,
  height?: number,
}
const Icon = (props: IconProps) => {
  const FaIcon: IconType = faIcons[props.iconName];
  return (
      <FaIcon className={`${props.className} text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} />
  )
}


export default Icon;
