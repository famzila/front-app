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
            <h1 className="special-title text-primary pb-5">
              Technologies
            </h1>
            <Row className="justify-content-between">
              <Col md="1">
                <div className="">
                  <img
                    alt="Angular"
                    className="img-fluid"
                    src={require('assets/img/theme/angular-only.png').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="React"
                    className="img-fluid"
                    src={require('assets/img/theme/react.png').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="VueJs"
                    className="img-fluid"
                    src={require('assets/img/theme/vuejs.png').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="Typescript"
                    className="img-fluid"
                    src={require('assets/img/theme/typescript.png').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="Bootstrap"
                    className="img-fluid"
                    src={require('assets/img/theme/bootstrap.png').default}
                  />
                </div>
              </Col>
              <Col md="1">
                <div className="">
                  <img
                    alt="Wordpress"
                    className="img-fluid"
                    src={require('assets/img/theme/wordpress.png').default}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Technologies;
