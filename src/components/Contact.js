import React from 'react';
import axios from 'axios';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledAlert,
} from 'reactstrap';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '', sentSuccess: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.name,
      email: event.target.email,
      message: event.target.message,
    });
  }

  goToContact = () => {
    const anchor = document.querySelector('#contact');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    };
    let base_url = '/';
    if (process.env.NODE_ENV !== 'production') {
      base_url = process.env.REACT_APP_LOCAL;
    }
    axios
      .post(`${base_url}/contacts/send`, newContact)
      .then((res) => {
        console.info(`${res}`);
        this.setState({ sentSuccess: true });
      })
      .catch((error) => {
        console.error(`Error while fetching articles: ${error}`);
        this.setState({ sentSuccess: false });
      });
  };
  render() {
    return (
      <>
        <section className="section section-lg bg-gradient-default mb-5 mt-10">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h1 className="special-title text-white">Contact us</h1>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          id="contact"
          className="section section-lg pt-lg-0 section-contact-us"
        >
          <Container>
            <Row className="justify-content-center mt--300">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h2 className="mb-1">Want to contact us?</h2>
                    <p className="mt-0">
                      Feel free to do so, you are welcomed.
                    </p>
                    {this.state.sentSuccess ? (
                      <UncontrolledAlert color="success" fade={true}>
                        <span className="alert-inner--icon">
                          <i className="ni ni-like-2" />
                        </span>
                        <span className="alert-inner--text ml-1">
                          <strong> Thank you!</strong> for your message, you'll
                          soon receive our response.
                        </span>
                      </UncontrolledAlert>
                    ) : (
                      ''
                    )}
                    <form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            name="name"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
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
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="message"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
export default Contact;
