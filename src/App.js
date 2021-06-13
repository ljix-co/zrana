import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Recepies from './routes/Recepies';
import Footer from './components/Footer';
import Blog from './routes/Blog';
import Pantry from './routes/Pantry';
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
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/pantry">
            <Pantry/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
