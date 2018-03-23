import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import Cube from './Cube';
import Square from './Square';
import style from './App.scss';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      elements: ['cube', 'block']
    };
  }

  render() {
    const { elements } = this.state;
    return (
      <BrowserRouter location="/">
        <div className={style.App}>
          {/* Links */}
          <div className={style.links}>
            {elements.map(name => (
              <Link key={name} to={name}>
                {name}
              </Link>
            ))}
          </div>
          <hr />
          {/*  Routes / Components */}
          {elements.map(name => {
            return (
              <Route
                path={'/' + name}
                key={String(name)}
                render={
                  name.includes('cube')
                    ? () => <Cube name={name} />
                    : () => <Square name={name} />
                }
              />
            );
          })}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;