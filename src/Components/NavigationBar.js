import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar-link {
    color: #bbb;
  }
    .navbar {
      background-color: #832;
      font-color: black;
      width: 100%;
    }
    .navbar-brand,
    .navbar-nav .nav-link {
      color: #bbb;

      &:hover {
        color: white;
      }
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar
      className="row col-12 d-flex justify-content-center text-white"
      expand="lg"
    >
      <Navbar.Brand href="/">Gary Trucking LLC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="./Services/Dispatch">
              Dispatch
            </NavDropdown.Item>
            <NavDropdown.Item href="./Services/Ifta"> IFTA </NavDropdown.Item>
            <NavDropdown.Item href="./Services/CabCard">
              CAB Card
            </NavDropdown.Item>
            <NavDropdown.Item href="./Services/form2290">
              {" "}
              Form 2290{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="./Services/UcrRegistration">
              {" "}
              UCR Registration{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="./Services/Biennial">
              {" "}
              Biennial MCS-150{" "}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Current Drivers" id="basic-nav-dropdown">
            <NavDropdown.Item href="/CurrentDrivers/Login">
              Login
            </NavDropdown.Item>
            <NavDropdown.Item href="/CurrentDrivers/BOL">
              BOL Uploader
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Future Drivers" id="basic-nav-dropdown">
            <NavDropdown.Item href="/FutureDrivers/JobApplication">
              Application
            </NavDropdown.Item>
            <Nav.Link>
              <Link to="./EligibilityCheck">EligibilityCheck</Link>
            </Nav.Link>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link>
              {" "}
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
