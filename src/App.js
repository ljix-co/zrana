import React, {  useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
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
import NotFound from './routes/NotFound';

function App() {
  const [bUrl] = useState('http://323k122.mars1.mars-hosting.com/api/');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [existing_route, setExstingRoute] = useState(true);
  const routes = [
    { path: '/', name: 'početna', Component: Home },
    { path: '/recipes', name: 'recepti', Component: Recepies },
    { path: '/recipes/:id', name: 'recept_id', Component: ChosenRec },
    { path: '/blog', name: 'blog', Component: Blog },
    { path: '/blog/:id', name: 'blog_id', Component: ChosenBlog },
    { path: '/pantry', name: 'špajz', Component: Pantry },
    { path: '/login', name: 'login', Component: Login },
    { path: '/registration', name: 'registracija', Component: Registration },
    { path: '/profile', name: 'profil', Component: Profile },
    { path: '/usr_rec', name: 'user_rec', Component: UserRec },
    // { path: '*', name: 'not_found', Component: NotFound },
    // { path: '/404', name: 'not_found', Component: NotFound }
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
      console.log(user)
    })
  }, [])

  useEffect(() => {
    function chckRoute() {
     const path = routes.find(el => el.path === window.location.pathname);
     console.log(window.location.href)
     if(path === undefined) {
       setExstingRoute(false);
     }
     if(path !== undefined) {
      setExstingRoute(true);
    }
    }
    
    window.addEventListener('hashchange', chckRoute);

    chckRoute();

    return () => {
      window.removeEventListener('hashchange', chckRoute);
    }

  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} />
          <ScrollToTop />
          <Switch>
          {existing_route && routes.map(({ path, Component }) => (
           
              <Route key={path} exact path={path} >
                <div className="page">
                  {path === '/profile' || path === '/usr_rec' ?
                    (Object.keys(user).length !== 0 ? (<Component bUrl={bUrl} user={user} setUser={setUser} setLoggedIn={setLoggedIn} />) :
                      (<Redirect to="/login" />)) : (<Component bUrl={bUrl} user={user} setUser={setUser} setLoggedIn={setLoggedIn} />)
                  }
                </div>

              </Route>
              
          ))}
            { existing_route === false &&
              <Route path='*'>
              <NotFound/>
            </Route>
            }
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
