import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';
import CardsFooter from '../components/Footers/CardsFooter';

class Courses extends React.Component {
  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-25">
              <div className="shape shape-style-1 shape-primary">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h1 className="display-3 text-white">
                        Read, discover, learn and find a better you!
                        <span>Courses from talented people</span>
                      </h1>
                      <p className="lead text-white">
                        In technology's world everything is in a race, things
                        change constantly. That's what's exciting in this
                        domain, learning never ends!
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
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
          <section className="section">
            <Container>
              <h1 className="special-title text-danger text-center">
                {' '}
                Courses
              </h1>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Courses;
