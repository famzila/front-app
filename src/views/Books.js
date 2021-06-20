import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';
import Contact from '../components/Contact';
import Timeline from 'components/Timeline.js';
import Book from '../components/Book.js';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.match.params.book,
    };
  }
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
                        <span>Courses from talented developers</span>
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
                    className="fill-secondary"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>

          <section className="section bg-secondary text-center pb-15">
            <Container>
              <h1 className="special-title text-primary">
                {' '}
                Your path to web development...
              </h1>
              <h3>Courses from talented developers and engineers</h3>
            </Container>
          </section>
          {this.state.book === undefined ? (
            <Timeline />
          ) : (
            <Book book={this.state.book} />
          )}
          <Contact ref={this.contact} />
        </main>
      </>
    );
  }
}

export default Books;
