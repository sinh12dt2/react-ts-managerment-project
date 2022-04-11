
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// Layouts
const SidebarLayout = lazy(() => import('../layouts/SidebarLayout'));


// Views
const Home = lazy(() => import('../views/Home'));
const About = lazy(() => import('../views/About'));
const Dashboard = lazy(() => import('../views/Dashboard'));
const Kanban = lazy(() => import('../views/Kanban'));
const Inbox = lazy(() => import('../views/Inbox'));
const Users = lazy(() => import('../views/Users'));
const Products = lazy(() => import('../views/Products'));
const SignIn = lazy(() => import('../views/SignIn'));
const SignOut = lazy(() => import('../views/SignOut'));

const routes =
[
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/kanban", element: <Kanban /> },
      { path: "/inbox", element: <Inbox /> },
      { path: "/users", element: <Users /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-out", element: <SignOut /> }
    ],
    redirect: '/about' 
  },
  { path: "/home", element: <Home /> }
];

const Router = () => {
  return useRoutes(routes);
}

export default Router;
