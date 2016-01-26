import React from 'react';
import {Link} from 'react-router';

class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="welcome">
        <h1>Welcome to your Local Brew Guide</h1>
        <section className="message">
          <p>
            Your one stop for discovering the beer that YOU like in the Bay Area.
          </p>
        </section>
        <h3>Where would you like to explore?</h3>

        <section className='city-container'>
          <Link to="search">
          <section className='city sf'>
            <p>SF</p>
          </section>
          </Link>
          <section className='city pending north-bay'>
            <p>{"North Bay\nCOMING\nSOON"}</p>
          </section>
          <section className='city pending east-bay'>
            <p>{"East Bay\nCOMING\nSOON"}</p>
          </section>


          <section className='city pending south-bay'>
            <p>{"South Bay\nCOMING\nSOON"}</p>
          </section>

        </section>
      </section>
    );
  }
}

export default Welcome;
