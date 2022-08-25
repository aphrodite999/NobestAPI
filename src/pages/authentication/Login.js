// import { Link } from 'react-router-dom';

// material-ui
// import { Grid, Stack, Typography } from '@mui/material';

// project import
// import AuthLogin from './auth-forms/AuthLogin';
// import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

// const Login = () => (
//     <AuthWrapper>
//         <Grid container spacing={3}>
//             <Grid item xs={12}>
//                 <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
//                     <Typography variant="h3">Login</Typography>
//                     <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
//                         Don&apos;t have an account?
//                     </Typography>
//                 </Stack>
//             </Grid>
//             <Grid item xs={12}>
//                 <AuthLogin />
//             </Grid>
//         </Grid>
//     </AuthWrapper>
// );

// export default Login;

import '../../common_ts/firebase_auth';
import './Login.css';
import { FirebaseInit, FirebaseGoogleLogin, FirebaseAuthEmail } from '../../common_ts/firebase_auth';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const firebaseConfig = {
    apiKey: 'AIzaSyDz696hCdnL1LG9EXCDR8L8AxvF7Baj7qQ',
    authDomain: 'nobest-api.firebaseapp.com',
    projectId: 'nobest-api',
    storageBucket: 'nobest-api.appspot.com',
    messagingSenderId: '684457114701',
    appId: '1:684457114701:web:3bd6690fb5e9f0dbdf7004',
    measurementId: 'G-4DPL88GMDZ'
};

let navigate;
let context;

async function login() {
    await FirebaseInit(firebaseConfig);
    let success;
    console.trace('release mode');
    const r = await FirebaseGoogleLogin('nobest.jp');
    success = r[0];
    context.setAuthenticated(success);

    if (success) {
        console.trace('login success');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: 'adosrfoaijfoie', rtoken: 'oivsoint6a22' })
        };
        fetch('https://nobest-api.net/v1/login/verify', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log('Data : ', data));
        navigate('/dashboard/default');
    }
}

const Login = () => {
    navigate = useNavigate();
    context = useGlobalContext();

    return (
        <div className="App">
            <header className="App-header">
                Google認証は
                <span className="App-link" onClick={login}>
                    こちら
                </span>
            </header>
        </div>
    );
};

export default Login;
