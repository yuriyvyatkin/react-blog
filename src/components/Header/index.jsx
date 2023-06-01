import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ROUTES from 'utils/routes';
import './Header.css';

export default function Header() {
  const handleLinkClick = (event) => {
    const navbar = event.currentTarget.closest('.navbar');
    const navbarToggler = navbar.querySelector('.navbar-toggler');
    navbarToggler.click();
  };

  return (
    <Navbar className="header ps-3" expand="sm, md, lg, xl, xxl" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Navbar.Brand>
            <div
              className="header__avatar avatar mt-3 rounded-circle bg-secondary"
              role="img"
              alt="Аватар"
            ></div>
          </Navbar.Brand>
          <Nav.Link as={Link} to={ROUTES.HOME} onClick={handleLinkClick}>
            Список постов
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.ABOUT} onClick={handleLinkClick}>
            Обо мне
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
