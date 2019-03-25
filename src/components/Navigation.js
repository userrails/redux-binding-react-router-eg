import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      )
  }
}

export default Navbar;