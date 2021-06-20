import React from 'react';
// core components
import Technologies from '../components/Technologies.js';
import Collaborations from '../components/Collaborations.js';
import Contact from '../components/Contact.js';
import About from 'components/About.js';
import Banner from 'components/Banners/Banner.js';

class Home extends React.Component {
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
        <main ref="main">
          <Banner onClick={this.handleContactClick} />
          <About ref={this.about} />
          <Collaborations />
          <Technologies />
          <Contact ref={this.contact} />
        </main>
      </>
    );
  }
}

export default Home;
