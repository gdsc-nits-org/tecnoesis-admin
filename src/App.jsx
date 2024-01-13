import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home/Home';
// import Team from './components/Team/Team';
import SigninGoogle from './components/SigninGoogle/SigninGoogle';


const App = () => {
  return (
    <>
      <SigninGoogle />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router> */}
    </>
  );
};

export default App;
