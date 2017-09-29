'use strict';

//Imports...
import React from 'react';
import { render } from 'react-dom';
import { Store, createStore } from 'redux';
import reducer from './../shared/reducers/index';
import { Provider } from 'react-redux';

import App from './../shared/App';

let store = createStore(reducer);
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

//Render our base component
render((
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);

//And... yep, in theory that's everything we need for public, since the /shared/ folder contains most of our react elements anyway, since the server can render them for us!