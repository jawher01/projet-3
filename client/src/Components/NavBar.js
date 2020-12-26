import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Nav.Link>
          <Link to="/dashbord">HOME</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>
          <Link to="/publication">PUBLICATION</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">PROFILE</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
