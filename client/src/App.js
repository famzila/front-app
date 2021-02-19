import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Index from './views/Index.js';
import ArticlesList from './views/ArticlesList.js';
import Article from './views/Article.js';
import Notfound from 'components/Notfound.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Index {...props} />} />
          <Route
            path="/add-article"
            exact
            render={(props) => <Article {...props} />}
          />
          <Route
            path="/not-found"
            exact
            render={(props) => <Notfound {...props} />}
          />
          <Route
            path="/articles/:type/:tag"
            exact
            render={(props) => <ArticlesList {...props} />}
          />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
