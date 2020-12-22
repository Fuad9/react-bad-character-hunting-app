import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import CharactersDetails from "../pages/CharactersDetails/CharactersDetails";
import NotFound from "./NotFound";

const Routes = () => {
   return (
      <>
         <Router>
            <Switch>
               <Route path="/home">
                  <Home />
               </Route>

               <Route path="/characterDetails/:id">
                  <CharactersDetails />
               </Route>

               <Route exact path="/" component={Home} />

               <Route path="*">
                  <NotFound />
               </Route>
            </Switch>
         </Router>
      </>
   );
};

export default Routes;
