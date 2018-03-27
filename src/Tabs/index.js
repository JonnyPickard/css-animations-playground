import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Tabs.scss';

export default class Tabs extends Component {
  render() {
    return (
      <div className={style.tabs}>
        <div className={style.tabsContainer}>
          {this.props.tabs.map((tab, index) => (
            <div
              key={String(index)}
              className={classNames(style['classTab_' + index])}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
