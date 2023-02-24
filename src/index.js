import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import store from "./redux/store";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookservice-context/bookservice-context";
import {BrowserRouter} from "react-router-dom";
import i18n from "./i18n"
import {Suspense} from "react";
import { createBrowserHistory } from 'history'


const basename = document.querySelector('base')?.getAttribute('href') ?? '/'

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BookstoreServiceProvider value={BookstoreService}>
                    <BrowserRouter basename={basename}>
                        <Suspense fallback={<div>"Loading"</div>}>
                            <App/>
                        </Suspense>
                    </BrowserRouter>
                </BookstoreServiceProvider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);



