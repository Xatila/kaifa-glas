import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../pictures/logo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import "./Navbar.css";

const CustomNavbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setNavbarVisible(isScrollingUp || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`custom-navbar ${isNavbarVisible ? "visible" : "hidden"} px-4`}
    >
      <Navbar.Brand onClick={() => navigate("/")}>
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
          style={{ width: 40, height: 40 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto align-items-end">
          <Nav.Link onClick={() => navigate("/")}>Начало</Nav.Link>
          <Nav.Link onClick={() => navigate("/about")}>За нас</Nav.Link>
          <NavDropdown title="Поръчай" id="collasible-nav-dropdown">
            <NavDropdown.Item href="tel:0897256650">
              0897256650
            </NavDropdown.Item>
            <NavDropdown.Item href="tel:0879155149">
              0879155149
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => navigate("https://www.instagram.com/kevinbaliev/")}
            >
              Instagram
            </NavDropdown.Item>
          </NavDropdown>

          <ColorModeSwitch />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
