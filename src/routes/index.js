import React, { Suspense, lazy } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
// import asyncComponents from "./asyncComponents";

const Home = lazy(() => import("../pages/Home/Home"));
const CreateMenu = lazy(() => import("../pages/CreateMenu/CreateMenu"));
const HowItWorks = lazy(() => import("../pages/HowItWorks/HowItWorks"));
const QrDownload = lazy(() => import("../pages/QrDownload/QrDownload"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const RegisterPartner = lazy(() =>import("../pages/Register/RegisterPartner"));
const RegisterRestaurant = lazy(() => import("../pages/Register/RegisterRestaurant"))
const DealTracker = lazy(() => import('../pages/DealTracker/DealTracker'))
const DealStatus = lazy(() => import('../pages/DealTracker/DealStatus'))
const Router = () => {
  return (
    <HashRouter>
      <Navigation />
      {/* TODO: Make a custom component for fallback  */}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreateMenu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/qr/:menuId" component={QrDownload} />
          <Route path="/edit/:menuId/:hash">
            <CreateMenu edit />
          </Route>
          <Route exact path="/qr/edit/:menuId">
            <QrDownload edit />
          </Route>
          <Route exact  path="/register/restaurant" component={RegisterRestaurant} />
          <Route exact  path="/register/partner" component={RegisterPartner} />
          <Route exact  path="/track" component={DealTracker} />
          <Route exact path="/track/:partnerCode" component={DealStatus} />
        </Switch>
      </Suspense>

      <Footer />
    </HashRouter>
  );
};

export default Router;
