import React, { useEffect, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
// reactstrap components
import { Spinner } from 'reactstrap';
import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Index from './views/Index.js';
ReactGA.initialize(process.env.REACT_APP_GA_ID);

const BlogComponent = lazy(() => import('views/Blog'));
const NotfoundComponent = lazy(() => import('views/Notfound'));
const AddArticleComponent = lazy(() => import('views/AddArticle'));
const ArticlesListComponent = lazy(() => import('views/ArticlesList'));

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <>
      <React.Suspense
        fallback={
          <div class="text-center">
            <Spinner type="grow">
              <span className="sr-only" size="lg">
                Loading...
              </span>{' '}
            </Spinner>
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={(props) => <Index {...props} />} />
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
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}

export default App;
