import React from 'react';
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledAlert,
  Container,
  Row,
  Col,
} from 'reactstrap';

import CardsFooter from '../components/Footers/CardsFooter.js';

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: '',
        cover: '',
        subtitle: '',
        description: '',
        body: '',
        duration: '',
        type: '',
        tags: '',
      },
      isAdded: false,
    };
  }
  /**
   * Submit handler
   * @param {event} submition event
   */
  handleSubmit = (event) => {
    event.preventDefault();

    const newArticle = {
      title: event.target.elements.title.value,
      cover: event.target.elements.cover.value,
      author: event.target.elements.author.value,
      subtitle: event.target.elements.subtitle.value,
      description: event.target.elements.description.value,
      body: event.target.elements.body.value,
      duration: event.target.elements.duration.value,
      type: event.target.elements.type.value,
      tags: event.target.elements.tags.value,
    };
    this.setState({
      article: newArticle,
    });
    let base_url = '/';
    if (process.env.NODE_ENV !== 'production') {
      base_url = process.env.REACT_APP_LOCAL;
    }
    axios
      .post(`${base_url}/articles/add`, newArticle)
      .then((res) => {
        console.log(`Article added ${res.data}`);
        this.setState({
          isAdded: true,
        });
      })
      .catch((error) => {
        this.setState({
          isAdded: false,
        });
        console.error(`Error while creating an article: ${error}`);
      });
  };

  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
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
          <section className="section bg-white">
            <Container>
              <div className="text-center">
                <h1 className="display-3">Adding an article</h1>
                {this.state.isAdded ? (
                  <div className="text-left">
                    <UncontrolledAlert color="success" fade={true}>
                      <span className="alert-inner--icon">
                        <i className="ni ni-like-2" />
                      </span>
                      <span className="alert-inner--text ml-1">
                        <strong>Success!</strong> article added successfully!
                      </span>
                    </UncontrolledAlert>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={
                        require('assets/img/theme/img-1-1200x1000.jpg').default
                      }
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Welcome
                      </h4>
                      <p className="lead text-italic text-white">
                        Have a happy day!
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <Container>
                    <Row className="justify-content-center">
                      <Col lg="12">
                        <Card className="bg-gradient-white border-0">
                          <CardBody>
                            <form onSubmit={this.handleSubmit}>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-user-run" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Title"
                                    name="title"
                                    id="title"
                                    type="text"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-circle-08" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Author"
                                    name="author"
                                    id="author"
                                    type="text"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-caps-small" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Sub-title"
                                    name="subtitle"
                                    id="subtitle"
                                    type="text"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-watch-time" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Article duration"
                                    name="duration"
                                    id="duration"
                                    type="text"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-app" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Article's type"
                                    name="type"
                                    id="type"
                                    type="text"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-tag" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Tags separated by comma ','"
                                    name="tags"
                                    id="tags"
                                    type="text"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-album-2" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Article's Cover URL"
                                    type="text"
                                    name="cover"
                                    id="cover"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-single-copy-04" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Article's body URL"
                                    type="text"
                                    name="body"
                                    id="body"
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-4">
                                <Input
                                  className="form-control-alternative"
                                  cols="80"
                                  name="description"
                                  placeholder="Type description ..."
                                  rows="4"
                                  type="textarea"
                                />
                              </FormGroup>
                              <div>
                                <Button
                                  block
                                  className="btn-round"
                                  color="primary"
                                  size="lg"
                                  type="submit"
                                >
                                  Add article
                                </Button>
                              </div>
                            </form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default AddArticle;
