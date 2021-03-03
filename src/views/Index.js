import React from 'react';

// core components
import Technologies from '../components/Technologies.js';
import Collaborations from '../components/Collaborations.js';
import SimpleFooter from '../components/Footers/SimpleFooter.js';
import Contact from '../components/Contact.js';
import About from 'components/About.js';
import Banner from 'components/Banners/Banner.js';

class Index extends React.Component {
  parentHandleClick = (type) => {
    this.setState({ selectedtype: type });
    this.newsletter.current.toggleModal('formModal', type);
  };

  render() {
    return (
      <>
        <main ref="main">
          <Banner />
          <About />
          <Collaborations />
          <Technologies />
          <Contact />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
