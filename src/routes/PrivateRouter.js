import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PrivateRouter = (props) => {
    const [authenticated, setAuthenticated] = useGlobalContext();
    return <Fragment>{authenticated() ? props.children : <Navigate to={routes.login} />}</Fragment>;
};

export default PrivateRouter;
