import React, {Component} from 'react';
import './App.css';
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import indexRoutes from "./constants/index.jsx";
import "./assets/scss/material-kit-react.css?v=1.3.0";

const hist = createBrowserHistory();

class App extends Component {
    render() {
        console.log(this.props.location);
        return (
            <>
                <Router history={hist}>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route exact path={prop.path} key={key} component={prop.component}/>;
                        })}
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
