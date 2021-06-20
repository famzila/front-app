import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

class Technologies extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container className="text-center">
            <h1 className="special-title text-primary pb-5">Technologies</h1>
            <Row className="justify-content-between">
              <Col md="1">
                <div className="">
                  <img
                    alt="Angular"
                    width="70px"
                    height="57px"
                    className="img-fluid"
                    src={require('assets/img/theme/angular-only.jpg').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="React"
                    width="70px"
                    height="57px"
                    className="img-fluid"
                    src={require('assets/img/theme/react.jpg').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="VueJs"
                    width="70px"
                    height="57px"
                    className="img-fluid"
                    src={require('assets/img/theme/vuejs.jpg').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="Typescript"
                    className="img-fluid"
                    width="70px"
                    height="57px"
                    src={require('assets/img/theme/typescript.jpg').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="Bootstrap"
                    width="70px"
                    height="57px"
                    className="img-fluid"
                    src={require('assets/img/theme/bootstrap.jpg').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="Wordpress"
                    width="70px"
                    height="57px"
                    className="img-fluid"
                    src={require('assets/img/theme/wordpress.jpg').default}
                  />
                </div>
              </Col>
            </Row>
          </Container>
          {/* <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require('assets/img/theme/services.png').default}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <p className="lead">
                    We build, we customize, we optimize, go with you to create
                    the website you need!
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-ruler-pencil" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Build and create a responsive website from scratch
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-spaceship" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Optimize your website by boosting performance,
                            accessibility and SEO.
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-app" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Help you find the right technology to use
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-briefcase-24" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Mentoring and accompany you to learn web development
                            and get you first developer job!
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container> */}
        </section>
      </>
    );
  }
}

export default Technologies;
