/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Card, CardImg, Container, Row, Col } from 'reactstrap';
import SocialMedia from './SocialMedia';
class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/courses/angular">
                    <CardImg
                      alt="..."
                      src={
                        require('assets/img/theme/angular-courses.jpg').default
                      }
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/courses/basics">
                    <CardImg
                      alt="..."
                      src={
                        require('assets/img/theme/basics-courses.jpg').default
                      }
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <SocialMedia about="0" onClick={this.props.onClick} />
        </footer>
      </>
    );
  }
}

export default CardsFooter;
