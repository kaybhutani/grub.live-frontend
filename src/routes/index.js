import React, { Suspense } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import asyncComponents from "./asyncComponents";
const Router = () => {
  return (
    <HashRouter>
      <Navigation />
      {/* TODO: Make a custom component for fallback  */}
      <Suspense fallback="<div>...Loading</div>">
        <Switch>
          <Route exact path="/" component={asyncComponents.Home} />
          <Route exact path="/create" component={asyncComponents.CreateMenu} />
          <Route exact path="/about" component={asyncComponents.About} />
          <Route exact path="/contact" component={asyncComponents.Contact} />
          <Route
            exact
            path="/how-it-works"
            component={asyncComponents.HowItWorks}
          />
          <Route
            exact
            path="/qr/:menuId"
            component={asyncComponents.QrDownload}
          />
          <Route path="/edit/:menuId/:hash">
            <asyncComponents.CreateMenu edit />
          </Route>
          <Route exact path="/qr/edit/:menuId">
            <asyncComponents.QrDownload edit />
          </Route>
        </Switch>
      </Suspense>

      <Footer />
    </HashRouter>
  );
};

export default Router;
