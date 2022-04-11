import { NavigateFunction, Outlet, useLocation, useNavigate, Location } from "react-router-dom";
import { useEffect } from "react";
import NavLinkEntity from "../entities/NavLink.entity";
import NavLink from "../components/NavLink";
import Icon from '../components/Icon';

const MenuList = (props: { menus: NavLinkEntity[] }): JSX.Element =>
  <ul className="space-y-2">
    {
      props.menus.map((item: NavLinkEntity) => (
        <li key={item.to}>
          <NavLink to={item.to} label={item.label} icon={item.icon}>
            { item.children }
          </NavLink>
        </li>
      ))
    }
  </ul>
;

const SidebarLayout = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/about');
    }
  }, [location])
  const menus: NavLinkEntity[] = [
    { to: '/dashboard', label: 'Dashboard', icon: <Icon iconName="FaThList" className="w-5 h-5" /> },
    { to: '/kanban',
      label: 'Kanban',
      icon: <Icon iconName="FaTasks" className="w-5 h-5" />,
      children: <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
    },
    { to: '/inbox',
      label: 'Inbox',
      icon: <Icon iconName="FaEnvelope" className="w-5 h-5" />,
      children: <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
    },
    { to: '/users', label: 'Users', icon: <Icon iconName="FaUsers" className="w-5 h-5" /> },
    { to: '/products', label: 'Products', icon: <Icon iconName="FaProductHunt" className="w-5 h-5" /> },
    { to: '/about', label: 'About me', icon: <Icon iconName="FaInfoCircle" className="w-5 h-5" /> },
    { to: '/sign-in', label: 'Sign In', icon: <Icon iconName="FaSignInAlt" className="w-5 h-5" /> },
    { to: '/sign-out', label: 'Sign Out', icon: <Icon iconName="FaSignOutAlt" className="w-5 h-5" /> },
  ];
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 h-full px-3 bg-gray-50 rounded dark:bg-gray-800">
          <MenuList menus={menus} />
        </div>
      </aside>
      {/* <div className="w-64 p-4 border-r border-r-gray-200">Sidebar</div> */}
      <div className="flex flex-col flex-1 h-screen overflow-x-hidden overflow-y-auto relative">
        <header className="h-16 p-4">Header</header>
        <main className="grow border-y-gray-200 border-y">
          <div className="container md:p-2 lg:p-4 h-full">
            <Outlet />
          </div>
        </main>
        <footer className="h-16 p-4">Footer</footer>
      </div>
    </div>
  )
};

export default SidebarLayout;
