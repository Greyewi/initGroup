import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Link className="tabs-btn" to="/first">First</Link>
        <Link className="tabs-btn" to="/second">Second</Link>
        
        <div className="table-container">{this.props.children}</div>
      </div>
    );
  }
}

export default Header;
