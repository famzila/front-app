import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
} from 'reactstrap';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { type: 'Angular', selected: false },
        { type: 'React', selected: false },
        { type: 'Vuejs', selected: false },
        { type: 'All', selected: true },
      ],
      defaultType: this.props.type,
      email: '',
      type: '',
    };
  }

  toggleModal = (state, type) => {
    this.setState({
      [state]: !this.state[state],
      defaultType: type,
      options: [
        { type: 'Angular', selected: type === 'angular' },
        { type: 'React', selected: type === 'react' },
        { type: 'Vuejs', selected: type === 'vuejs' },
        { type: 'All', selected: type === 'all' },
      ],
    });
  };
  handleSubscribe = (event) => {
    event.preventDefault();
    const temail = event.target.elements.email.value;
    const type = event.target.elements.type.value;
    this.setState({
      email: temail,
      type: type,
    });
    // axios({
    //   url:
    //     'https://front.us7.list-manage.com/subscribe/post?u=26c793b23bcb0bd2b8656a55e&amp;id=955389e919',
    //   headers: { 'Access-Control-Allow-Origin': '*' },
    //   method: 'post',
    //   data: this.state,
    //   dataType: 'json',
    // }).then(() => {
    //   console.log('success');
    // }).catch(error => console.log("Error occurred while subscribing to the Newsletter: ", error));
  };
  render() {
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          size="md"
          isOpen={this.state.formModal}
          toggle={() => this.toggleModal('formModal')}
        >
          <div className="modal-body p-0">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-2">
                <div>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.toggleModal('formModal')}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5 className="modal-title" id="modal-title-default">
                    Enjoy your weekly reading ...
                  </h5>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={this.handleSubscribe}>
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
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={(e) => this.setState({ email: e })}
                        onFocus={(e) => this.setState({ emailFocused: true })}
                        onBlur={(e) => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.passwordFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-app" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="select"
                        name="type"
                        autoComplete="off"
                        onChange={(e) => this.setState({ defaultType: e })}
                      >
                        {this.state.options.map((option, index) => (
                          <option
                            key={index}
                            value={option.type}
                            selected={option.selected}
                          >
                            {option.type}
                          </option>
                        ))}
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="primary"
                      type="submit"
                      disabled={this.state.email === ''}
                    >
                      Subscribe
                    </Button>
                  </div>
                </Form>
                <div className="text-center text-muted mb-4">
                  <small>
                    You can cancel subscription at anytime, no spam!{' '}
                  </small>
                </div>
              </CardBody>
            </Card>
          </div>
        </Modal>
      </>
    );
  }
}

export default Newsletter;
