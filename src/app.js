/*

IGNORE FOR NOW

// ----------------------
// IMPORTS

// React
import React from 'react';

// <DocumentTitle> component for setting the page title
import Helmet from 'react-helmet';

import rx from 'rxjs';

// RxJS HOC
import connect from 'kit/lib/streams';

// Styles
import css from './app.css';

// ----------------------

// We'll display this <Home> component when we're on the / route
const Home = () => (
  <h1>You&apos;re on the home page - click another link above</h1>
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const Page = ({ match }) => (
  <h1>Changed route: {match.params.name}</h1>
);

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
const Stats = () => {
  const info = [
    ['Environment', process.env.NODE_ENV],
    ['Running', SERVER ? 'On the server' : 'In the browser'],
  ];

  return (
    <ul className={css.data}>
      {info.map(([key, val]) => (
        <li key={key}>{key}: <span>{val}</span></li>
      ))}
    </ul>
  );
};

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
// const App = () => (
//   <div>
//     <Helmet
//       title="ReactNow application"
//       meta={[{
//         name: 'description',
//         content: 'ReactNow starter kit app',
//       }]} />
//     <div className={css.hello}>
//       <h1>ReactNow</h1>
//     </div>
//     <hr />
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/page/about">About</Link></li>
//       <li><Link to="/page/contact">Contact</Link></li>
//     </ul>
//     <hr />
//     <Route exact path="/" component={Home} />
//     <Route path="/page/:name" component={Page} />
//     <hr />
//     <p>Runtime info:</p>
//     <Stats />
//   </div>
// );

const App = props => (
  <div>
    Message: {props.message}
  </div>
);

App.propTypes = {
  message: React.PropTypes.string.isRequired,
};

// export default App;

export default connect(() => ({
  message: rx.Observable.of('hello', 'there'),
}))(App);

*/