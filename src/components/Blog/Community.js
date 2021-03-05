import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

class Community extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section py-5 bg-secondary">
          <Container className="mb-5">
            <h1 className="special-title text-center  mb-4">
              Join Our Communities
            </h1>
            <div className="mb-3">
              <Container>
                <Row>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <a
                        href="https://www.linkedin.com/in/fatima-amzil-9031ba95/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={
                            require('assets/img/theme/team-2-800x800.jpg')
                              .default
                          }
                          style={{ width: '100px' }}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <a
                        href="https://famzil.medium.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require('assets/img/theme/medium.png').default}
                          style={{ width: '100px' }}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <a
                        href="https://twitter.com/FatimaAMZIL9"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={
                            require('assets/img/theme/team-3-800x800.jpg')
                              .default
                          }
                          style={{ width: '100px' }}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/frontEndWorld/"
                        rel="noreferrer"
                      >
                        <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={
                            require('assets/img/theme/team-4-800x800.jpg')
                              .default
                          }
                          style={{ width: '100px' }}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Community;
