import React from 'react';
import SocialMedia from './SocialMedia';
class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <SocialMedia about="1" onClick={this.props.onClick} onClickContact={this.props.onClickContact} />
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
