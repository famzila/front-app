import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';
import Badge from 'reactstrap/lib/Badge';

class About extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section id="about" className="section">
            <Container>
              <Row className="row-grid text-center">
                <Col  className="order-md-1" md="12">
                  <div className="pr-md-5">
                    <h1 className="special-title text-warning pb-2">
                      About us
                    </h1>
                    <p className="lead pb-5">
                      I'm a passionate web developer and software engineer based
                      in France. I have more than 4 years of experience, I
                      worked on several projects. I design and develop fast
                      websites, intuitive interfaces, and engaging brands. I
                      also help brands brainstorm their website based on their
                      goals.
                    </p>
                    <h1 className="text-warning special-title">
                      Skills
                    </h1>
                    <Row className="row-grid text-center pb-5">
                      <Col className="order-md-1" md="4">
                        <ul className="list-unstyled mt-5">
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-settings-gear-65" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Clean code
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-palette" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Amazing designes
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-satisfied" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Super communication
                                </h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col className="order-md-2" md="4">
                        <ul className="list-unstyled mt-5">
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-app" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Front-end techs
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-single-copy-04" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Content management
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-mobile-button" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Mobile friendly design
                                </h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col className="order-md-3" md="4">
                        <ul className="list-unstyled mt-5">
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-chart-pie-35" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Website analytics
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-compass-04" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  Website audits
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                  className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mr-3"
                                  color="warning"
                                >
                                  <i className="ni ni-cart" />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="info-title text-uppercase text-default">
                                  e-Commerce websites
                                </h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
      </>
    );
  }
}

export default About;
