import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../logo.svg";
function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="row d-flex flex-row justify-content-center alig-items-center p-0">

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />


      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ background: "#FFD51F"}} className="p-3 col-md-3" >
          <Nav.Link href="#deets" style={{ color:"#000000", fontWeight: "bold"}}>Proyectos</Nav.Link>
        </Nav>
        <Nav style={{ background: "#009B93" }} className="p-3 col-md-3">
          <Nav.Link href="#deets" style={{ color:"#000000", fontWeight: "bold"}}>Sevicios</Nav.Link>
        </Nav>
        <div class="d-none d-sm-none d-md-block">  <img
          width="80px"
          height="72px"
          src='../assets/img/logo/logo.png'
          alt="First slide"
        />
        </div>
        <Nav style={{ background: "#FFD51F" }} className="p-3 col-md-3">
          <Nav.Link href="#deets" style={{ color:"#000000", fontWeight: "bold"}}>Nosotros</Nav.Link>
        </Nav>
        <Nav style={{ background: "#009B93" }} className="p-3 col-md-2">
          <Nav.Link href="#deets" style={{ color:"#000000",fontWeight: "bold"}}>Nosotros</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default NavBar;