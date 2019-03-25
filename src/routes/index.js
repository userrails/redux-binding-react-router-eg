import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

class Routes extends Component {
  render () {
    return (
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      )
  }
}

export default Routes;
