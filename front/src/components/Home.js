import React, { Component } from 'react';
import Button from './Button';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage box">
        <div className="head-home block ">
          <h1 className="title is-1">Iron Profile</h1>
          <p>Today Massi an Lotiko will create an app</p>
        </div>
        <nav >
          <Button className="" text="signup" />
          <Button className="" text="login" />
        </nav>
      </div>
    );
  }
}
