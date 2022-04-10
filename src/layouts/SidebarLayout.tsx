import { NavigateFunction, Outlet, useLocation, useNavigate, Location } from "react-router-dom";
import { useEffect } from "react";
const SidebarLayout = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/about');
    }
  }, [location])
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 p-4 border-r border-r-gray-200">Sidebar</div>
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
