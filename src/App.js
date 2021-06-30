import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Recepies from './routes/Recepies';
import Footer from './components/Footer';
import Blog from './routes/Blog';
import Pantry from './routes/Pantry';
import Login from './routes/Login';
import Registration from './routes/Registration';
import axios from 'axios';
import Profile from './routes/Profile';
import UserRec from './routes/UserRec';
import ChosenRec from './routes/ChosenRec';
import ChosenBlog from './routes/ChosenBlog';
import ScrollToTop from './ScrollToTop';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [bUrl] = useState('http://323k122.mars1.mars-hosting.com/api/');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // const [inProp, setInProp] = useState(false);
  const routes = [
    {path: '/', name: 'početna', Component: Home},
    {path: '/recipes', name: 'recepti', Component: Recepies},
    {path: '/recipes/:id', name: 'recept_id', Component: ChosenRec},
    {path: '/blog', name: 'blog', Component: Blog},
    {path: '/blog/:id', name: 'blog_id', Component: ChosenBlog},
    {path: '/pantry', name: 'špajz', Component: Pantry},
    {path: '/login', name: 'login', Component: Login},
    {path: '/registration', name: 'registracija', Component: Registration},
    {path: '/profile', name: 'profil', Component: Profile},
    {path: '/usr_rec', name: 'user_rec', Component: UserRec}
  ]

  useEffect(() => {
    axios.get(bUrl + 'login', { params: { sid: localStorage.getItem('sid') } }).then((res) => {
      console.log(res);
      setLoggedIn(true);
      setUser(res.data.user);
    }).catch(error => {
      console.log(error);
      setLoggedIn(false);
      if (localStorage.getItem('sid')) {
        localStorage.removeItem('sid');
      }

    })
  }, [])


  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} />
        <Fragment>
          <ScrollToTop />
          {/* <Switch>
            <Route exact path="/">
              <CSSTransition in={inProp} timeout={200} classNames="my-node">

                <Home />
              </CSSTransition>
            </Route>
           
            <Route exact path="/recipes">
              <Recepies bUrl={bUrl} />
            </Route>
            <Route path="/recipes/:id">
              <ChosenRec bUrl={bUrl} />
            </Route>
            <Route exact path="/blog">
              <Blog bUrl={bUrl} />
            </Route>
            <Route path="/blog/:id">
              <ChosenBlog bUrl={bUrl} />
            </Route>
            <Route path="/pantry">
              <Pantry bUrl={bUrl} />
            </Route>
            <Route path="/login">
              <Login bUrl={bUrl} setLoggedIn={setLoggedIn} setUser={setUser} />
            </Route>
            <Route path="/registration">
              <Registration bUrl={bUrl} />
            </Route>
            <Route path="/profile">
              <Profile bUrl={bUrl} user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
            </Route>
            <Route path="/usr_rec">
              <UserRec bUrl={bUrl} user={user} />
            </Route>
              {({ match }) => (
                // <CSSTransition
                //   in={match != null}
                //   timeout={300}
                //   classNames="page"
                //   unmountOnExit
                // >

                
          </Switch> */}
               {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
            
                  <div className="page">
                    <Component bUrl={bUrl} user={user} setUser={setUser} setLoggedIn={setLoggedIn}/>
                  </div>
             
            </Route>
          ))}
        </Fragment>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
