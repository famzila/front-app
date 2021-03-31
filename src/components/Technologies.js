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
        </section>
      </>
    );
  }
}

export default Technologies;
