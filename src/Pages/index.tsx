import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const HomePage = lazy(() => import("./Home"));
const DownloadQRPage = lazy(() => import("./DownloadQR"));
const MenuPage = lazy(() => import("./Menu"));

const Router: React.FC = () => {
  return (
    <HashRouter>
      <NavBar />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create" exact>
            <MenuPage />
          </Route>
          <Route path="/edit/:id" exact>
            <MenuPage />
          </Route>
          <Route path="download" exact>
            <DownloadQRPage />
          </Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default Router;
