import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Row, Col, CardImg, Card } from 'reactstrap';

class Post extends React.Component {
  render() {
    if (this.props.posts) {
      return (
        <>
          {this.props.posts.map((post, index) => (
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <Link to={{ pathname: `/${post.body}` }} target="_blank">
                    <CardImg alt={post.title} src={post.cover} />
                  </Link>
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
                      Angular
                    </h4>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <h3>{post.title} </h3>
                  <p className="lead">{post.subtitle}</p>
                  <p>{post.description}</p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    target="_blank"
                    href={post.body}
                    rel="noreferrer"
                  >
                    read more ...
                  </a>
                </div>
              </Col>
              <hr />
            </Row>
          ))}
        </>
      );
    } else {
      return (
        <div>
          <h3>No content for this page</h3>
        </div>
      );
    }
  }
}

export default Post;
