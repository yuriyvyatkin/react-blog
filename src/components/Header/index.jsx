import Avatar from 'components/Avatar';
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
    <Navbar
      className="header ps-3"
      expand="sm, md, lg, xl, xxl"
      bg="primary"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="header__nav">
          <Navbar.Brand className="header__brand">
            <Avatar className="header__avatar" />
          </Navbar.Brand>
          <Nav.Link as={Link} to={ROUTES.HOME} onClick={handleLinkClick}>
            Главная
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.ABOUT} onClick={handleLinkClick}>
            Обо мне
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <h1 className="header__title fst-italic text-center text-white mx-auto">
        <Nav.Link as={Link} to={ROUTES.HOME}>
          NFT БЛОГ
        </Nav.Link>
      </h1>
      <a
        className="header__banner"
        href="https://opensea.io/"
        title="Buy on OpenSea"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{
            width: '220px',
            borderRadius: '5px',
            boxShadow: ' 0px 1px 6px rgba(0, 0, 0, 0.25)',
          }}
          src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20Light.png"
          alt="Available on OpenSea"
        />
      </a>
    </Navbar>
  );
}
