import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageMap from 'react-pagemap';
import ReactGA from 'react-ga';
// reactstrap components
import { Spinner } from 'reactstrap';
import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Header from 'components/Header.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import Home from './views/Home.js';
ReactGA.initialize(process.env.REACT_APP_GA_ID);

const BlogComponent = lazy(() => import('views/Blog'));
const NotfoundComponent = lazy(() => import('views/Notfound'));
const AddArticleComponent = lazy(() => import('views/AddArticle'));
const ArticlesListComponent = lazy(() => import('views/ArticlesList'));
const CoursesComponent = lazy(() => import('views/Courses'));
const BooksComponent = lazy(() => import('views/Books'));

class App extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  componentDidUpdate() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  // Go to contact form
  handleContactClick = () => {
    this.contact.current.goToContact();
  };

  // Go to about
  handleAboutClick = () => {
    this.about.current.goToAbout();
  };
  render() {
    return (
      <>
        <PageMap />
        <React.Suspense
          fallback={
            <div className="text-center">
              <Spinner type="grow" color="primary" />
            </div>
          }
        >
          <BrowserRouter>
            <Header
              onContactClick={this.handleContactClick}
              onAboutClick={this.handleAboutClick}
            />
            <Switch>
              <Route path="/" exact render={(props) => <Home {...props} />} />
              <Route
                path="/blog/api/add-article"
                exact
                render={() => <AddArticleComponent />}
              />
              <Route
                path="/not-found"
                exact
                render={() => <NotfoundComponent />}
              />
              <Route
                path="/blog/articles/:type/:tag"
                exact
                render={(props) => <ArticlesListComponent {...props} />}
              />
              <Route path="/blog" exact render={() => <BlogComponent />} />
              <Route
                path="/express-courses"
                exact
                render={(props) => <CoursesComponent {...props} />}
              />
              <Route
                path="/e-books"
                exact
                render={(props) => <BooksComponent {...props} />}
              />
              <Route
                path="/e-books/:book"
                exact
                render={(props) => <BooksComponent {...props} />}
              />
              <Redirect to="/not-found" />
            </Switch>
            <SimpleFooter />
          </BrowserRouter>
        </React.Suspense>
      </>
    );
  }
}

export default App;
