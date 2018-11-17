import React, { Component } from 'react';
import './assets/css/app.css';
import Home from './components/Home';
import Projects from './components/Projects';

class App extends Component {

    render() {
        return (
            <div className="container">
            <Projects />
                {/* <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} /> */}
            </div>
        );
    }
}

export default App;
