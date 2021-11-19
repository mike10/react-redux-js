import React, { useReducer } from 'react';
import './App.css';

import { Gallery } from './components/Gallery/Gallery';
import { ThemeContext } from "./components/context/context"
import { UserProfile } from './components/UserProfile/UserProfile'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CreateUser } from './components/CreateUser/CreateUser'

function App() {

  const [state, dispatch] = useReducer(reducer, {theme: "light"});

  function reducer(state) {
    if (state.theme === "light") {
      console.log(state.theme)
      return {theme: "dark"};
    } else {
      console.log(state.theme)
      return {theme: "light"}
    }
  }
  
  return ( 
    <ThemeContext.Provider value={dispatch}>
      <div className={"App " + state.theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Gallery}/>
          <Route exact path="/user/create" component={CreateUser}/>
          <Route path="/Profile/:id" component={UserProfile}/>
        </Switch>
      </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
