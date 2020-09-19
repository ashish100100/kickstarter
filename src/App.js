import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Layout/Home';
import ProjectList from './components/Project/ProjectList';
import NotFound from './components/404/NotFound';
import './App.css';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

function App() {
  return (
    <Router>
        <Routes />
    </Router>
  );
}

export default App;
