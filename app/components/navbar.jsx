import React from 'react';

var Navbar = React.createClass({

  render: function() {
    return (
      <div className='navbar'>
        <div>
        <h1>Local Brew Guide</h1>
        <ul>
          <li>Learn</li>
          <li>Plan</li>
          <li>About</li>
        </ul>
      </div>
      </div>
    );
  }
});

module.exports = Navbar;
