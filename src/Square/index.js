import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Square.scss';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimating: false,
      transitionIndex: 1
    };
  }
  render() {
    const { name } = this.props;
    const { isAnimating, transitionIndex } = this.state;

    return (
      <div className={style.blocksContainer}>
        <div className={style.checkboxContainer}>
          <div>
            <input
              name={name}
              type="checkbox"
              checked={isAnimating}
              onChange={() => {
                this.setState({ isAnimating: !isAnimating });
              }}
            />
            <label>Animate</label>
          </div>
          <div>
            <select
              value={transitionIndex}
              onChange={({ target: { value } }) => {
                this.setState(...this.state, {
                  transitionIndex: value
                });
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label>Transitions</label>
          </div>
        </div>
        <hr />
        <div className={classNames(style[`${name}Container`])}>
          <div
            className={classNames(
              `${style[name + '_' + transitionIndex]}`,
              isAnimating && style[`${name}Animation_${transitionIndex}`]
            )}
          />
        </div>
      </div>
    );
  }
}

export default Square;
