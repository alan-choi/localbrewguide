import React from 'react';

var Navbar = React.createClass({

  render: function() {
    return (
      <div className='navbar'>
          <h1>Local Brew Guide</h1>
          <ul>
            <li>Search</li>
            <li>Learn</li>
            <li>Plan</li>
            <li>About</li>
          </ul>
      </div>
    );
  }
});

module.exports = Navbar;
