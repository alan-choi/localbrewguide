import React from 'react';

var Navbar = React.createClass({

  render: function() {
    return (
      <div className='navbar'>
        <section>
          <h1>Local Brew Guide</h1>
          <ul>
            <li>Search</li>
            <li>Learn</li>
            <li>Plan</li>
            <li>About</li>
          </ul>
        </section>
      </div>
    );
  }
});

module.exports = Navbar;
