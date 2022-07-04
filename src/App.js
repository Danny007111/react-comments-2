import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from"./Components/Home";
import QuoteForm from"./Components/QuoteForm";
import QuoteListContainer from "./Components/QuoteListContainer";


function App() {
  return (
    <div>
      <NavBar/>
      <Switch>

        <Route exact path="/"
          element={<Home/>} 
        />
        <Route exact path="/QuoteForm"
        element={<QuoteForm/>} 
        />
        <Route exact path="/QuoteListContainer"
          element={<QuoteListContainer/>} 
        />

      </Switch>
    </div>
  );
}

export default App;
