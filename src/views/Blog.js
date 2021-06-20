import React from 'react';

// core components
import Contact from '../components/Contact.js';

// index page sections
import BlogBanner from '../components/Banners/BlogBanner.js';
import CardsBloc from '../components/Blog/CardsBloc.js';

import Community from '../components/Blog/Community.js';
import Mantra from '../components/Blog/Mantra.js';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.contact = React.createRef();
  }
  parentHandleClick = (type) => {
    this.setState({ selectedtype: type });
    this.newsletter.current.toggleModal('formModal', type);
  };
  handleReadClick = () => {
    const anchor = document.querySelector('#read');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  handleContactClick = () => {
    this.contact.current.goToContact();
  };
  render() {
    return (
      <>
        <main ref="main">
          <BlogBanner
            onClick={this.handleReadClick}
            handleContact={this.handleContactClick}
          />
          <div id="read">
            <CardsBloc type="angular" title="Angular ... choose your card" />
          </div>
          <Mantra />
          <CardsBloc type="react" title="React ... choose your card" />
          <Community />
          <CardsBloc type="vuejs" title="Vue.js ... choose your card" />
          <Contact ref={this.contact} />
          <CardsBloc type="professional" title="Professional life Trends" />
        </main>
      </>
    );
  }
}

export default Blog;
