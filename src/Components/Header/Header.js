import React, { Component } from "react";
import Button from "../Buttons/button";

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="container" style={{ textAlign: "center" }}>
          <h3>
            <b>Corporate Wellness</b>
          </h3>
          <Button />
        </header>
      </div>
    );
  }
}

export default Header;
