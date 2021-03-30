import React from 'react';
import Typical from 'react-typical';

// reactstrap components
import { Button, Container, Row, Col, Badge, Card, CardBody } from 'reactstrap';

class Banner extends React.Component {
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
            <div className="shape shape-style-1 shape-primary">
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
                  <Col className="text-center" lg="8">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require('assets/img/brand/logo.jpg').default}
                      style={{ width: '200px' }}
                    />
                    <h2 className="special-title text-white">
                      Hi, I'm Fatima AMZIL
                    </h2>

                    <p className="lead text-white">
                      <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                          "I'm a Software Engineer 💻 based in France",
                          2000,
                          'A Mentor at MyJobGlasses ✊',
                          1000,
                          'A teacher at SuperProf 💼',
                          1000,
                          'And mother of 4 lovely cats 🐱',
                          1000,
                          'I love technology, innovation and sharing what I know 💡',
                          3000,
                          'I help people build the website they want and need!',
                          3000,
                          'Welcome to my world! 🤗',
                          1000,
                        ]}
                      />
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        size="lg"
                        onClick={this.props.onClick}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-send" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Contact me</span>
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
          <section className="section section-lg pt-lg-0 mt--100">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-spaceship" />
                          </div>
                          <p className="text-primary text-uppercase">
                            FAST WEBSITES
                          </p>
                          <p className="description mt-3">
                            Reactive and fast websites. We build fast website
                            thanks to quick loading time and optimized code.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Performance
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              loading-time
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Optimization
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={this.props.onClick}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-mobile-button" />
                          </div>
                          <p className="text-info text-uppercase">
                            Responsive design
                          </p>
                          <p className="description mt-3">
                            Responsive design on small and large screens. Our
                            websites work efficiently on all devices.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              Responsive
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              Mobile-friendly
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              Small-devices
                            </Badge>
                          </div>
                          <Button className="mt-4" color="info" onClick={this.props.onClick}>
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
                            <i className="ni ni-satisfied" />
                          </div>
                          <p className="text-danger text-uppercase">
                            User experience focused
                          </p>
                          <p className="description mt-3">
                            We build intuitive websites to give the best user
                            experience. Our websites easy to use and dynamic.
                          </p>
                          <div>
                            <Badge color="danger" pill className="mr-1">
                              Intuitive UX/UI
                            </Badge>
                            <Badge color="danger" pill className="mr-1">
                              User focused
                            </Badge>
                            <Badge color="danger" pill className="mr-1">
                              Dynamic
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="danger"
                            onClick={this.props.onClick}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Banner;
