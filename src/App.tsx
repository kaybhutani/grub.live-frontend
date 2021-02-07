import React from "react";
import { Provider } from "react-redux";
import store from "./Reducers";
import "./App.scss";
import Router from "./Pages";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
