import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Login from '../pages/authentication/Login';
import NotFound from '../NotFound';

//GlobalContext import
import { useGlobalContext } from '../context';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - query page
const QueryPage = Loadable(lazy(() => import('pages/extra-pages/QueryPage')));
const ManagerWheather = Loadable(lazy(() => import('pages/extra-pages/ManagerWheather')));

// render - utilities
const Dashboard1 = Loadable(lazy(() => import('pages/components-overview/Dashboard')));
const Picture = Loadable(lazy(() => import('pages/components-overview/Picture')));
const Wheather = Loadable(lazy(() => import('pages/components-overview/Wheather')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRouter = () => {
    const { authenticated, setAuthenticated } = useGlobalContext();
    // authenticated ? alert('auth') : alert('not');
    // return {
    let router = useRoutes([
        {
            path: '/',
            element: authenticated ? <MainLayout /> : <Login />,
            // element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Dashboard1 />
                },
                {
                    path: 'picture',
                    element: <Picture />
                },
                {
                    path: 'dashboard',
                    children: [
                        {
                            path: 'default',
                            element: <Dashboard1 />
                        }
                    ]
                },
                {
                    path: 'query-page',
                    element: <QueryPage />
                },
                {
                    path: 'wheather',
                    element: <Wheather />
                },
                {
                    path: 'manager_wheather',
                    element: <ManagerWheather />
                }
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/free',
            element: <Login />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]);
    return router;
    // };
};

export default MainRouter;
