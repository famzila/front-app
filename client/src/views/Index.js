import React from 'react';

// core components
import DemoNavbar from '../components/DemoNavbar.js';
import CardsFooter from '../components/Footers/CardsFooter.js';
import Contact from '../components/Contact.js';

// index page sections
import Banner from '../components/Banner.js';
import Bloc from '../components/Bloc.js';

import Community from '../components/Community.js';
import Mantra from '../components/Mantra.js';

class Index extends React.Component {
  parentHandleClick = (type) => {
    this.setState({ selectedtype: type });
    this.newsletter.current.toggleModal('formModal', type);
  };

  render() {
    return (
      <>
        <DemoNavbar/>
        <main ref="main">
          <Banner/>
          <div
            id="read"
            ref={(ref) => {
              this.targetRef = ref;
            }}
          ></div>
          <Bloc type="angular" title="Angular ... choose your card" />
          <Mantra />
          <Bloc type="react" title="React ... choose your card" />
          <Community />
          <Bloc type="vuejs" title="Vue.js ... choose your card" />
          <Contact />
          <Bloc title="Profesionnal life Trends" />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
