import React from 'react';

// core components
import Technologies from '../components/Technologies.js';
import DemoNavbar from 'components/DemoNavbar.js';
import Collaborations from '../components/Collaborations.js';
import SimpleFooter from '../components/Footers/SimpleFooter.js';
import Contact from '../components/Contact.js';
import About from 'components/About.js';
import Banner from 'components/Banners/Banner.js';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.contact = React.createRef();
    this.about = React.createRef();
  }
  parentHandleClick = (type) => {
    this.setState({ selectedtype: type });
    this.newsletter.current.toggleModal('formModal', type);
  };
  handleContactClick = () => {
    this.contact.current.goToContact();
  };
  handleAboutClick = () => {
    this.about.current.goToAbout();
  };

  render() {
    return (
      <>
        <DemoNavbar about="1" onClick={this.handleAboutClick} />
        <main ref="main">
          <Banner onClick={this.handleContactClick} />
          <About ref={this.about} />
          <Collaborations />
          <Technologies />
          <Contact ref={this.contact} />
        </main>
        <SimpleFooter
          onClick={this.handleAboutClick}
          onClickContact={this.handleContactClick}
        />
      </>
    );
  }
}

export default Index;
