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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BookstoreServiceProvider value={BookstoreService}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </BookstoreServiceProvider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);



