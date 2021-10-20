import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
