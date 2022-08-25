import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRouter from './MainRouter';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRouter, LoginRoutes]);
    // return useRoutes({ authenticated ? [MainRoutes] : LoginRoutes});
}
