import React, { Component } from 'react';
import classNames from 'classnames';
import style from './Cube.scss';

class Cube extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ isAnimating: !this.state.isAnimating });
          }}
        >
          Animate?
        </button>
        <label> : {String(this.state.isAnimating)}</label>
        <div className={style.mainDiv}>
          <div
            className={classNames(
              this.state.isAnimating && style.boxDivAnimation,
              style.boxDiv
            )}
          >
            <div className={style.front} />
            <div className={style.back} />
            <div className={style.left} />
            <div className={style.right} />
            <div className={style.top} />
            <div className={style.bottom} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cube;
