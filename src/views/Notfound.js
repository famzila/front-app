import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { CardImg, Card, Container, Row, Col } from 'reactstrap';

class Notfound extends React.PureComponent{
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-12">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="card-plain shadow border-0">
                    <Link to="/">
                      <CardImg
                        alt="Not found"
                        src={
                          require('assets/img/theme/not-found-error.jpg')
                            .default
                        }
                      />
                    </Link>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="12">
                      <a className="text-center" href="/">
                        <small>Go back home?</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Notfound;
