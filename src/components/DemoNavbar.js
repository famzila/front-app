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
import Newsletter from 'components/Newsletter';

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.newsletter = React.createRef();
    this.state = {
      selectedtype: 'All',
      collapseClasses: '',
      collapseOpen: false,
      openModal: false,
    };
  }
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
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
              <button className="navbar-toggler" id="navbar_global" aria-label="Menu">
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
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Courses</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media className="d-flex align-items-center" href="/courses/basics">
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Getting started
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn how to code with HTML, CSS and JavaScript
                              and build your first website.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/courses/angular"
                        >
                          <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                            <img
                              alt="..."
                              className="img-fluid"
                              src={
                                require('assets/img/theme/angular.png').default
                              }
                            />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-danger mb-md-1">
                              Angular
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn about Angular step by step and start your
                              first web application with Angular.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/courses/react"
                        >
                          <div className="icon icon-shape bg-gradient-info rounded-circle text-white">
                            <img
                              alt="..."
                              className="img-fluid"
                              src={
                                require('assets/img/theme/react.png').default
                              }
                            />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-info mb-md-1">
                              React JS
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn about React step by step and start your
                              first web application with React.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/courses/vuejs"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <img
                              alt="..."
                              className="img-fluid"
                              src={
                                require('assets/img/theme/vuejs.png').default
                              }
                            />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-success mb-md-1">
                              Vue.js
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn about Vue.js step by step and start your
                              first web application with this framework.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                  {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Newsletter</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <DropdownItem
                        to="#"
                        onClick={() => this.handleClick('angular')}
                        tag={Link}
                      >
                        Angular Trends Newsletter
                      </DropdownItem>
                      <DropdownItem
                        to="#"
                        onClick={() => this.handleClick('react')}
                        tag={Link}
                      >
                        React Trends Newsletter
                      </DropdownItem>
                      <DropdownItem
                        to="#"
                        onClick={() => this.handleClick('vuejs')}
                        tag={Link}
                      >
                        Vue.Js Trends Newsletter
                      </DropdownItem>
                      <DropdownItem
                        to="#"
                        onClick={() => this.handleClick('all')}
                        tag={Link}
                      >
                        All
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                  {this.props.about === '1' ? (
                    <NavItem>
                      <NavLink href="#" onClick={this.props.onClick}>
                        About us
                      </NavLink>
                    </NavItem>
                  ) : (
                    ''
                  )}
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/blog"
                      id="tooltip333589075"
                    >
                      <span className="nav-link-inner--text">Blog</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589075">
                      Articles written by the most talented people around the
                      world!
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/frontEndWorld/"
                      id="tooltip333589074"
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
        <Newsletter type={this.state.selectedtype} ref={this.newsletter} />
      </>
    );
  }
}

export default DemoNavbar;
