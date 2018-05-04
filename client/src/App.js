import React from 'react';
import { Route, Switch } from 'react-router-dom';




import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bottom from "./components/Bottom";

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
            <div className="w-full" id="main-wrapper">
                <Navbar />
                <Switch>
                    <Route exact
                           path="/"
                           render={() => <Home/>} />
                    <Route path="/gallery"
                           render={() => <Gallery />} />
                    <Route path="/about" render={() => <About />}/>
                    <Route path="/contact" render={() => <Contact />}/>
                </Switch>
                <Bottom />
            </div>
        );
    }
}


export default App;