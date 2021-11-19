import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

const renderReactDom = () => {
    render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement,
    );
};

const hydrateReactDom = () => {
    hydrate(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement,
    );
};

if (window.cordova) {
    document.addEventListener('deviceready', () => {
        renderReactDom();
    }, false);
} else if (rootElement.hasChildNodes()) {
    hydrateReactDom();
} else {
    renderReactDom();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
