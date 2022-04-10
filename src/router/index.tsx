
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// Layouts
const SidebarLayout = lazy(() => import('../layouts/SidebarLayout'));


// Views
const Home = lazy(() => import('../views/Home'));
const About = lazy(() => import('../views/About'));

const routes =
[
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      { path: "/about", element: <About /> }
    ],
    redirect: '/about' 
  },
  { path: "/home", element: <Home /> }
];

const Router = () => {
  return useRoutes(routes);
}

export default Router;
