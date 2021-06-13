import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './compoenents/Navbar';
import Home from './routes/Home';
import Recepies from './routes/Recepies';
import Footer from './compoenents/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/recepies">
            <Recepies/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
