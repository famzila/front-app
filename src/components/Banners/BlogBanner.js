import Newsletter from 'components/Newsletter';
import React from 'react';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

class BlogBanner extends React.Component {
  constructor(props) {
    super(props);
    this.newsletter = React.createRef();
    this.state = {
      selectedtype: 'All',
    };
  }
  handleClick = (type) => {
    this.setState({ selectedtype: type });
    this.newsletter.current.toggleModal('formModal', type);
  };
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="FRONT"
                      className="img-fluid"
                      src={require('assets/img/brand/logo.png').default}
                      height="60px"
                      width="200px"
                    />
                    <h1 className="special-title text-white">
                      Welcome, ... discover, learn and enjoy!
                    </h1>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        onClick={this.props.onClick}
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-briefcase-24" />
                        </span>
                        <span className="btn-inner--text">Read & Learn</span>
                      </Button>{' '}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        size="lg"
                        onClick={this.props.handleContact}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-send" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Contact us</span>
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <small className="text-white">
                    <i className="fa fa-code pr-1"></i> with{' '}
                    <i className="fa fa-heart"></i> and{' '}
                    <i className="fa fa-coffee pr-1"></i>
                    by <strong> FAM </strong>
                  </small>
                </div>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        <Newsletter type={this.state.selectedtype} ref={this.newsletter} />
      </>
    );
  }
}

export default BlogBanner;
