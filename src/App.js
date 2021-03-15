import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Index from './views/Index.js';
import ArticlesList from './views/ArticlesList.js';
import AddArticle from './views/AddArticle.js';
import Notfound from 'views/Notfound.js';
import Blog from 'views/Blog.js';
import Courses from 'views/Courses.js';
ReactGA.initialize('G-GFRSV41LHS');

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Index {...props} />} />
          <Route
            path="/blog/api/add-article"
            exact
            render={(props) => <AddArticle {...props} />}
          />
          <Route
            path="/not-found"
            exact
            render={(props) => <Notfound {...props} />}
          />
          <Route
            path="/blog/articles/:type/:tag"
            exact
            render={(props) => <ArticlesList {...props} />}
          />
          <Route path="/blog" exact render={(props) => <Blog {...props} />} />
          <Route
            path="/courses/:type"
            exact
            render={(props) => <Courses {...props} />}
          />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
