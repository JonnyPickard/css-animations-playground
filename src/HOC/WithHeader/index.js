import React, { Component } from 'react';
import style from './WithHeader.scss';

class WithHeader extends Component {
  render() {
    return (
      <div>
        <div className={style.header}>
          {this.props.name}
          <hr />
        </div>
        {this.props.content}
      </div>
    );
  }
}

export default WithHeader;
