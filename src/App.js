import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Cocktail from "./pages/Cocktail";

// import components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/cocktail/:id">
          <Cocktail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
