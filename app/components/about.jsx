import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/" >back home</Link>
        </div>
      </div>
    );
  }
}

export default About;
