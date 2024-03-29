/*eslint-disable*/
import React from 'react';
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Col,
  UncontrolledTooltip,
  Container,
  Row,
} from 'reactstrap';

class SocialMedia extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h1 className="text-primary special-title mb-2">
                Thank you for supporting us!
              </h1>
              <h2 className="mb-0 font-weight-light">Let's get in touch on</h2>
            </Col>
            <Col className="text-lg-right btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                rel="noreferrer"
                href="https://twitter.com/FatimaAMZIL9"
                id="tooltip475038074"
                target="_blank"
                aria-label="Follow us on Twitter"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Follow us on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                rel="noreferrer"
                href="https://www.facebook.com/frontEndWorld/"
                id="tooltip837440490"
                aria-label="Follow us on Facebook"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440490">
                Like us on Facebook
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="instagram"
                rel="noreferrer"
                href="https://www.instagram.com/the_frontend_world/"
                id="tooltip837440414"
                aria-label="Follow us on Instagram"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-instagram" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Follow us on Instagram
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                rel="noreferrer"
                href="https://www.linkedin.com/in/fatima-amzil-9031ba95/"
                id="tooltip837440424"
                target="_blank"
                aria-label="Follow us on Linkedin"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-linkedin-square " />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440424">
                Follow us Linkedin
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="default"
                rel="noreferrer"
                href="https://famzil.medium.com/"
                id="tooltip837440499"
                aria-label="Follow us on Medium"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-medium " />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440499">
                Follow us on Medium
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()} <a href="/">FAM</a>
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink href="/express-courses">EXPRESS COURSES</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/e-books">E-BOOKS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/blog">BLOG</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SocialMedia;
