import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

class Collaborations extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section pb-15 bg-gradient-primary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-lg-1 pb-5" lg="6">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h1 className="special-title text-white">
                      We Collaborated with
                    </h1>
                    <p className="text-white">
                      several client at building efficient and smart
                      applications. Here are some clients we worked with in
                      France.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="3" xs="6">
                <a
                  href="https://www.ineris.fr/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="INERIS"
                    width="150px"
                    height="150px"
                    className="img-fluid rounded-circle shadow"
                    src={require('assets/img/theme/logo-ineris.jpg').default}
                    style={{ width: '150px' }}
                  />
                </a>
              </Col>
              <Col sm="3" xs="6">
                <a
                  href="https://peps.paris.fr/peps/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="PEPS"
                    width="150px"
                    height="150px"
                    className="img-fluid rounded-circle shadow"
                    src={require('assets/img/theme/logo-peps.jpg').default}
                    style={{ width: '150px' }}
                  />
                </a>
              </Col>
              <Col sm="3" xs="6">
                <a
                  href="https://www.sncf-reseau.com/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="RESEAU SNCF"
                    width="150px"
                    height="150px"
                    className="img-fluid rounded-circle shadow"
                    src={require('assets/img/theme/logo-sncf.jpg').default}
                    style={{ width: '150px' }}
                  />
                </a>
              </Col>
              <Col sm="3" xs="6">
                <a
                  href="https://www.lacipav.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LaCipav"
                    width="150px"
                    height="150px"
                    className="img-fluid rounded-circle shadow"
                    src={require('assets/img/theme/logo-lacipav.jpg').default}
                    style={{ width: '150px' }}
                  />
                </a>
              </Col>
            </Row>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Collaborations;
