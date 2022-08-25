import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from 'store';
import { GlobalContext } from './context';
import reportWebVitals from './reportWebVitals';
import ThemeCustomization from 'themes';
import { BrowserRouter } from '../node_modules/react-router-dom/index';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

ReactDOM.render(
    <StrictMode>
        <GlobalContext>
            <ThemeCustomization>
                <ReduxProvider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ReduxProvider>
            </ThemeCustomization>
        </GlobalContext>
    </StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
