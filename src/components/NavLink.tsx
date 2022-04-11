import { Link } from "react-router-dom";
import NavLinkEntity from '../entities/NavLink.entity';

const NavLink = (props: NavLinkEntity) => {
  return (
    <Link to={props.to} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      { props.icon }
      <span className="flex-1 ml-3 whitespace-nowrap">{ props.label }</span>
      { props.children }
    </Link>
  )
}


export default NavLink;
