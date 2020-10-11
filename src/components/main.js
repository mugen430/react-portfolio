import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landing';
import AboutMe from './about';
import Projects from './projects';
import Resume from './resume';



const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
        </Switch>
    );
}

export default Main;