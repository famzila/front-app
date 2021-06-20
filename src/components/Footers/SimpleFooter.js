import React from 'react';
import SocialMedia from './SocialMedia';
class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <SocialMedia />
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
