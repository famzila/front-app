import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Card, Container, Row, Col, CardImg } from 'reactstrap';

class CardsBloc extends React.Component {
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
            <h1 className=" text-center special-title mb-4 text-warning">
              {this.props.title}
            </h1>
            <div className="mb-3">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row>
                      <Col className="mb-5 mb-md-0" lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <Link to={`/blog/articles/${this.state.type}/core`}>
                            <CardImg
                              alt="Core"
                              src={
                                require(`assets/img/theme/${this.state.type}-core.jpg`)
                                  .default
                              }
                            />
                          </Link>
                        </Card>
                      </Col>
                      <Col className="mb-5 mb-lg-0" lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <Link to={`/blog/articles/${this.state.type}/tips`}>
                            <CardImg
                              alt="Tips and Tricks"
                              src={
                                require(`assets/img/theme/${this.state.type}-tips.jpg`)
                                  .default
                              }
                            />
                          </Link>
                        </Card>
                      </Col>
                      <Col className="mb-5 mb-lg-0" lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <Link
                            to={`/blog/articles/${this.state.type}/optimization`}
                          >
                            <CardImg
                              alt="User experience and Optimization"
                              src={
                                require(`assets/img/theme/${this.state.type}-optimization.jpg`)
                                  .default
                              }
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

export default CardsBloc;
