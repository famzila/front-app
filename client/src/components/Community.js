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
            <h3 className="h4 text-center font-weight-bold mb-4">
              Join Our Communities
            </h3>
            <div className="mb-3">
              <Container>
                <Row>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require('assets/img/theme/team-2-800x800.jpg').default}
                        style={{ width: '100px' }}
                      />
                      <div className="pt-4 text-center"></div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require('assets/img/theme/team-1-800x800.jpg').default}
                        style={{ width: '100px' }}
                      />
                      <div className="pt-4 text-center"></div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require('assets/img/theme/team-3-800x800.jpg').default}
                        style={{ width: '100px' }}
                      />
                      <div className="pt-4 text-center"></div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require('assets/img/theme/team-4-800x800.jpg').default}
                        style={{ width: '100px' }}
                      />
                      <div className="pt-4 text-center"></div>
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
