import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/show-all">Hiện tất cả học sinh</NavLink>
          <NavLink to="/search">Tra cứu học sinh</NavLink>
          <NavLink to="/add">Thêm học sinh</NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
