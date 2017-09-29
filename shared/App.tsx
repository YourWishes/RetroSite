import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { BrowserRouter , Route, Switch} from 'react-router-dom';

import NavbarArea from './components/nav/NavbarArea';

//Pages
import HomePage from './pages/HomePage/HomePage';

//Styles
const styles = require('./styles/index.scss');

class App extends React.Component<AppProps> {
    constructor(props:AppProps) {
        super(props);
    }

    render() {

        return (
            <BrowserRouter>
                <div className="app">
                    <NavbarArea />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export interface AppProps { };

export default App;
    