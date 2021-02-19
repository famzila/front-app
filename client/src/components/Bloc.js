import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, Container, Row, Col, CardImg } from 'reactstrap';

class Bloc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      tag: 'all',
    };
  }
  render() {
    return (
      <>
        <section className="section pb-0 section-components">
          <Container className="mb-5">
            <h3 className="h4 text-center font-weight-bold mb-4">
              {this.props.title}
            </h3>
            <div className="mb-3">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row>
                      <Col className="mb-5 mb-md-0" lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <Link to={`/articles/${this.state.type}/core`}>
                            <CardImg
                              alt="..."
                              src={require(`assets/img/theme/${this.state.type}-core.png`).default}
                            />
                          </Link>
                        </Card>
                      </Col>
                      <Col className="mb-5 mb-lg-0" lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <Link to={`/articles/${this.state.type}/tips`}>
                            <CardImg
                              alt="..."
                              src={require(`assets/img/theme/${this.state.type}-tips.png`).default}
                            />
                          </Link>
                        </Card>
                      </Col>
                      <Col className="mb-5 mb-lg-0" lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <Link
                            to={`/articles/${this.state.type}/optimization`}
                          >
                            <CardImg
                              alt="..."
                              src={require(`assets/img/theme/${this.state.type}-optimization.png`).default}
                            />
                          </Link>
                        </Card>
                      </Col>
                    </Row>
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

export default Bloc;
