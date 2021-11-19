import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Gallery from './components/Gallery/Gallery';
import { ThemeContext } from "./components/context/context"
import { UserProfile } from './components/UserProfile/UserProfile'
import { CreateUser } from './components/CreateUser/CreateUser'

export default function App(props) {

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
        <Gallery/>
    // <ThemeContext.Provider value={dispatch}>
    //   <div className={"App light" + state.theme}>
        
    //    <BrowserRouter>
    //     <Routes>
    //       <Route exact path="/" component={Gallery}/>
    //       <Route exact path="/user/create" component={CreateUser}/>
    //       <Route path="/Profile/:id" component={UserProfile}/>
    //     </Routes>
    //   </BrowserRouter>
    //   </div>
    // </ThemeContext.Provider>
  )
}

