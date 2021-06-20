import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.newsletter = React.createRef();
    this.state = {
      selectedtype: 'All',
      collapseClasses: '',
      collapseOpen: false,
      openModal: false,
      showExtraLinks: false,
    };
  }
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();

    // check URL to show or not about and contact us
    const currentURL = window.location.pathname;
    if (currentURL === '/' || currentURL === '/home') {
      this.setState({ showExtraLinks: true });
    } else {
      this.setState({ showExtraLinks: false });
    }
  }

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  handleClick = (type) => {
    this.setState({ selectedtype: type });
    this.newsletter.current.toggleModal('formModal', type);
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require('assets/img/brand/logo.png').default}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global" name="navbar toggler">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require('assets/img/brand/logo1.png').default}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/express-courses"
                      id="tooltip333589190"
                    >
                      <span className="nav-link-inner--text">
                        EXPRESS COURSES
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589190">
                      Express courses to get quickly productive and start
                      coding!
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/e-books"
                      id="tooltip333589175"
                    >
                      <span className="nav-link-inner--text">E-BOOKS</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589175">
                      The roadmap you need to follow to become a web developer.
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/blog"
                      id="tooltip333589075"
                    >
                      <span className="nav-link-inner--text">BLOG</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589075">
                      High quality articles to keep you updated and stay tuned with frontend tech and news.
                    </UncontrolledTooltip>
                  </NavItem>
                  {/* {this.state.showExtraLinks === true ? (
                    <NavItem>
                      <NavLink href="#" onClick={this.props.onAboutClick}>
                        ABOUT
                      </NavLink>
                    </NavItem>
                  ) : (
                    ''
                  )}
                  {this.state.showExtraLinks === true ? (
                    <NavItem>
                      <NavLink href="#" onClick={this.props.onContactClick}>
                        CONTACT
                      </NavLink>
                    </NavItem>
                  ) : (
                    ''
                  )} */}
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/frontEndWorld/"
                      id="tooltip333589074"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/the_frontend_world/"
                      id="tooltip356693867"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/FatimaAMZIL9"
                      id="tooltip184698705"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/fatima-amzil-9031ba95/"
                      id="tooltip184698707"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square " />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698707">
                      Follow us on Linkedin
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://famzil.medium.com"
                      id="tooltip184698799"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-medium " />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Medium
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698799">
                      Follow us on Medium
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
