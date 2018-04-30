import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bottom from "./components/Bottom";

export const history = createBrowserHistory();

class App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        // TODO
    }

    componentWillReceiveProps(nextProps) {
        // TODO
    }


    render() {
        return (
            <div className="flex-coll w-full" id="main-wrapper">
                <Navbar />
                <Switch>
                    <Route exact
                           path="/"
                           render={() => <Home/>} />
                    <Route path="/gallery"
                           render={() => <Gallery />} />
                    <Route path="/videos" render={() => <Videos />}/>
                    <Route path="/about" render={() => <About />}/>
                    <Route path="/contact" render={() => <Contact />}/>
                </Switch>
                <Bottom />
            </div>
        );
    }
}


export default App;