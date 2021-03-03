import React from 'react';
import axios from 'axios';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

import CardsFooter from '../components/Footers/CardsFooter.js';
import Post from 'components/Blog/Post.js';

class ArticlesList extends React.Component {
  state = {
    type: this.props.match.params.type,
    tag: this.props.match.params.tag,
    articles: [],
  };

  getArticles() {
    let base_url = '';
    if (process.env.NODE_ENV !== 'production') {
      base_url = process.env.REACT_APP_LOCAL;
    }
    axios
      .get(
        `${base_url}/articles/${this.props.match.params.type}/${this.props.match.params.tag}`,
      )
      .then((res) => {
        if (res.data.length > 0) {
          console.log('Articles: ', res.data);
          this.setState({ articles: res.data });
        }
      })
      .catch((error) => {
        console.error(`Error while fetching articles: ${error}`);
      });
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    this.getArticles();
  }
  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-25">
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h1 className="display-3 text-white">
                        Read, discover, learn and find a better you!
                        <span>Articles from talented people</span>
                      </h1>
                      <p className="lead text-white">
                        In technology's world everything is in a race, things
                        change constantly. That's what's exciting in this
                        domain, learning never ends!
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--100">
            <Container></Container>
          </section>
          <section className="section">
            <Container>
              <Post posts={this.state.articles} />
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default ArticlesList;
