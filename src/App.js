// project import
import { Navigate, Route } from 'react-router-dom';
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Top from './pages/dashboard';
import Login from './pages/authentication/Login';
import './common_ts/firebase_auth';
import { useGlobalContext } from './context';
import MainRouter from './routes/MainRouter';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
    const { authenticated, setAuthenticated } = useGlobalContext();
    return (
        <ThemeCustomization>
            <ScrollTop>
                {/* <PrivateRouter> */}
                <MainRouter />
                {/* <Route exact path="/" element={<Login />} />
                <Route path="/dashboard" element={authenticated ? <Routes /> : <Login />} />
                <Route path="/picture" element={authenticated ? <Routes /> : <Login />} />
                <Route path="/wheather" element={authenticated ? <Routes /> : <Login />} />
                <Route path="/query-page" element={authenticated ? <Routes /> : <Login />} />
                <Route path="/manager-wheather" element={authenticated ? <Routes /> : <Login />} />
                </PrivateRouter> */}
            </ScrollTop>
        </ThemeCustomization>
    );
};

export default App;
