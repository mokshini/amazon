import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


import { auth, provider } from "./firebase";

function App() {
  const[{basket}, dispatch] = useStateValue();





  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if (authUser){
        dispatch({
          type: "ADD_USER",
          user: authUser
        });
      }else{
        dispatch({
          type: "ADD_USER",
          user:null
        });
      }
    });

    return () => {
      unsubscribe();
    }

  },[]);

  





  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
