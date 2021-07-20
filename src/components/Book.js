import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import InputGroup from 'reactstrap/lib/InputGroup';
import InputGroupAddon from 'reactstrap/lib/InputGroupAddon';
import InputGroupText from 'reactstrap/lib/InputGroupText';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  UncontrolledAlert,
} from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      acceptPolicy: false,
      sentBook: false,
    };
  }
  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      sentBook: false,
    });
    const submitedEmail = event.target.elements.email.value;
    const subAcceptPolicy = event.target.elements.acceptPolicy.checked;
    if (subAcceptPolicy && submitedEmail !== '') {
      let base_url = '/';
      if (process.env.NODE_ENV !== 'production') {
        base_url = process.env.REACT_APP_LOCAL;
      }
      const newSentBook = {
        name: this.props.book,
        email: submitedEmail,
      };
      console.log(newSentBook);
      axios
        .post(`${base_url}/books/send`, newSentBook)
        .then((res) => {
          console.log('Book: ', res);
          this.setState({
            sentBook: true,
          });
        })
        .catch((error) => {
          console.error(`Error while sending Book email: ${error}`);
        });
    }
  };

  // Check if all required fields are filled
  isFormValid = () => {
    const { email, acceptPolicy } = this.state;
    return email && acceptPolicy;
  };
  render() {
    return (
      <>
        <div>
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={
                    require(`assets/img/books/${this.props.book}.png`).default
                  }
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <p className="lead">
                    We help build a solid knowledge, by starting from the roots
                    and learning step by step and build your future career
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-air-baloon" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Learn how the web works</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-air-baloon" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Learn about HTTP and HTTPS</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-air-baloon" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Learn how the browser works</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center mt-5">
              <Col className="order-md-1" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require(`assets/img/books/back.png`).default}
                />
              </Col>
              <Col className="order-md-2" md="6">
                <div className="pr-md-5">
                  <p className="lead">
                    The roadmap will help to be in the right path to build your
                    web developer career.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-bold-right" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Essentials</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-bold-right" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Basics</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-bold-right" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Styling</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-bold-right" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Interactions</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-bold-right" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Team Tools</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-bold-right" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Trends Basics</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="primary">
                            <i className="ni ni-bold-right" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Advanced</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-secondary">
          <Container className="pt-5 pb-5">
            <h1 className="mb-5 mt-5 special-title text-primary">
              Get the book for <strong>free!</strong>
            </h1>
            <Form role="form" onSubmit={this.handleSubmit}>
              <Row className="justify-content-center">
                <Col className="order-md-1" md="6">
                  <FormGroup
                    className={classnames('mb-3', {
                      focused: this.state.emailFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email address"
                        type="email"
                        name="email"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="my-4 text-center">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="acceptPolicy"
                      name="acceptPolicy"
                      type="checkbox"
                      onChange={(e) =>
                        this.setState({
                          acceptPolicy: e.target.checked,
                        })
                      }
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="acceptPolicy"
                    >
                      <span>
                        I agree with the{' '}
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="submit"
                  disabled={!this.isFormValid()}
                >
                  Send me the book
                </Button>
                {this.state.sentBook ? (
                  <div className="mt-5">
                    <UncontrolledAlert color="success" fade={true}>
                      <span className="alert-inner--icon">
                        <i className="ni ni-like-2" />
                      </span>
                      <span className="alert-inner--text ml-1">
                        <strong> Thank you!</strong> Check your mailbox!
                      </span>
                    </UncontrolledAlert>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}

export default Book;
