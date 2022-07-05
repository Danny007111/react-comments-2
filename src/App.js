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

      <Route exact path="/">
          <Home />
        </Route>
    
        <Route path="/QuoteForm">
          <QuoteForm />
        </Route>

        <Route path="/QuoteListContainer">
          <QuoteListContainer />
        </Route>

      </Switch>
    </div>
  );
}

export default App;