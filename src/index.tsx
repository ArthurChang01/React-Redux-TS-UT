import "../CSS/bootstrap/bootstrap.css";
import "../CSS/font-awesome/font-awesome.css";
import "../CSS/toastr/toastr.css";
import "../CSS/main.css";

import React = require("react");
import ReactDOM = require("react-dom");
import {AppContainer} from 'react-hot-loader';

import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {MainReducer} from './reducers/MainReducer';
import {routerConfig} from './router';

let elem = document.querySelector('#app');
const routes = routerConfig();

const store = createStore(
  MainReducer,
  {},
  applyMiddleware(thunk)
);

function updateRender() {
    const App = require('./components').App;

    return ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                {routes}
            </Provider>
        </AppContainer>,
        elem
    )
}

updateRender();

if ((module as any).hot) {
    (module as any).hot.accept(
        './components',
        () => updateRender())
}