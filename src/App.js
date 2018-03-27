import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import WithHeader from './HOC/WithHeader';

import Cube from './Cube';
import Square from './Square';
import Tabs from './Tabs';

import style from './App.scss';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      elements: ['block', 'cube', 'tabs'],
      tabs: ['Tab', 'A Long String Tab', 'A Tabby Tab']
    };
  }

  renderElement = name => {
    if (name.includes('cube')) {
      return <WithHeader content={<Cube name={name} />} name={name} />;
    } else if (name.includes('block')) {
      return <WithHeader content={<Square name={name} />} name={name} />;
    } else if (name.includes('tabs')) {
      return (
        <WithHeader
          content={<Tabs name={name} tabs={this.state.tabs} />}
          name={name}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    const { elements } = this.state;
    return (
      <BrowserRouter location="/">
        <div className={style.App}>
          {/* Links */}
          <div className={style.sidebar}>
            <h2>Components</h2>
            <hr />
            {elements.map(name => (
              <Link key={name} to={name}>
                {name}
              </Link>
            ))}
          </div>
          <hr className={style.divider} />
          {/*  Routes / Components */}
          <div className={style.elementsContainer}>
            {elements.map(name => {
              return (
                <Route
                  path={'/' + name}
                  key={String(name)}
                  render={() => (
                    <div className={style.content}>
                      {this.renderElement(name)}
                    </div>
                  )}
                />
              );
            })}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
