import React from 'react';
import { IndexLink, Link } from 'react-router';

var Navbar = React.createClass({

  render: function() {
    return (
      <div className='navbar'>
          <IndexLink to="/"><h1>Local Brew Guide</h1></IndexLink>
          <ul>
            <li>Learn</li>
            <Link to='/plan'><li>Plan</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul>
      </div>
    );
  }
});

module.exports = Navbar;
