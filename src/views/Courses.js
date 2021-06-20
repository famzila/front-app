import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Container, Row, Col, Card, CardImg, Modal, Button } from 'reactstrap';
import Contact from '../components/Contact';
class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.match.params.book,
      notify: false,
    };
  }
  // Notify the user that the course is coming soon
  toggleModal = (state) => {
    this.setState({
      notify: !this.state.notify,
    });
  };
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
                    <Col lg="12 ">
                      <h1 className="display-3 text-white">
                        The Web developer job is so challenging. Technologies
                        are in a race...
                        <br />
                      </h1>
                      <h4 className="text-white">
                        There are always new things to learn, new ways to do
                        things better, further optimization, new patterns, new
                        techniques, new architectures, and learning never ends.
                      </h4>
                      <p className="lead text-white"></p>
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
              <div className="text-left">
                <div class="alert alert-default" role="alert">
                  <span class="lead">
                    <strong>Quality over quantity. </strong>These express
                    courses are designed to provide you with the updates you
                    need and help you learn new things quickly and go right to
                    the goal.
                  </span>
                </div>
              </div>
            </Container>
            <Container className="container-lg p-5">
              <Row className="pt-5">
                <Col className="mb-5 mb-md-0" md="6">
                  <Card className="card-lift--hover shadow border-0">
                    <Link to="#" onClick={() => this.toggleModal('notify')}>
                      <CardImg
                        alt="Courses"
                        src={require('assets/img/courses/1.png').default}
                      />
                    </Link>
                    <span class="badge badge-warning">Coming soon</span>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" md="6">
                  <Card className="card-lift--hover shadow border-0">
                    <Link to="#" onClick={() => this.toggleModal('notify')}>
                      <CardImg
                        alt="Courses"
                        src={require('assets/img/courses/2.png').default}
                      />
                    </Link>
                    <span class="badge badge-warning">Coming soon</span>
                  </Card>
                </Col>
              </Row>
              <Row className="pt-5">
                <Col className="mb-5 mb-md-0" md="6">
                  <Card className="card-lift--hover shadow border-0">
                    <Link to="#" onClick={() => this.toggleModal('notify')}>
                      <CardImg
                        alt="Courses"
                        src={require('assets/img/courses/3.png').default}
                      />
                    </Link>
                    <span class="badge badge-warning">Coming soon</span>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" md="6">
                  <Card className="card-lift--hover shadow border-0">
                    <Link to="#" onClick={() => this.toggleModal('notify')}>
                      <CardImg
                        alt="Courses"
                        src={require('assets/img/courses/4.png').default}
                      />
                    </Link>
                    <span class="badge badge-warning">Coming soon</span>
                  </Card>
                </Col>
              </Row>
              <Row className="pt-5">
                <Col className="mb-5 mb-md-0" md="6">
                  <Card className="card-lift--hover shadow border-0">
                    <Link to="#" onClick={() => this.toggleModal('notify')}>
                      <CardImg
                        alt="Courses"
                        src={require('assets/img/courses/5.png').default}
                      />
                    </Link>
                    <span class="badge badge-warning">Coming soon</span>
                  </Card>
                </Col>
                <Col className="mb-5 mb-lg-0" md="6">
                  <Card className="card-lift--hover shadow border-0">
                    <Link to="#" onClick={() => this.toggleModal('notify')}>
                      <CardImg
                        alt="Courses"
                        src={require('assets/img/courses/6.png').default}
                      />
                    </Link>
                    <span class="badge badge-warning">Coming soon</span>
                  </Card>
                </Col>
              </Row>
              <Row className="pt-5">
                <Col className="mb-5 mb-lg-0" md="6">
                  <Card className="card-lift--hover shadow border-0">
                    <Link to="#" onClick={() => this.toggleModal('notify')}>
                      <CardImg
                        alt="Courses"
                        src={require('assets/img/courses/7.png').default}
                      />
                    </Link>
                    <span class="badge badge-warning">Coming soon</span>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Contact ref={this.contact} />
          <Modal
            className="modal-dialog-centered modal-danger"
            contentClassName="bg-gradient-danger"
            isOpen={this.state.notify}
            toggle={() => this.toggleModal('notify')}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-notification">
                This course is not yet available
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal('notificationModal')}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="py-3 text-center">
                <i className="ni ni-bell-55 ni-3x" />
                <h4 className="heading mt-4">Please contact us</h4>
                <p>
                  Let us your email and the course you're interested in by
                  contacting us. We'll let you know when the express course is
                  available.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <Button
                className="btn-white"
                color="default"
                type="button"
                onClick={() => this.toggleModal('notify')}
              >
                Ok, Got it
              </Button>
              <Button
                className="text-white ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal('notify')}
              >
                Close
              </Button>
            </div>
          </Modal>
        </main>
      </>
    );
  }
}

export default Courses;
