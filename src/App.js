import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./assets/scss/index.scss";
import "../node_modules/eos-icons/dist/css/eos-icons.css";
import Router from "./routes";
// import '.assets/fonts/Lato/Lato-Regular.ttf'
import store from "./store";
import { Provider } from "react-redux";
ReactGA.initialize("UA-182081513-1");
function App() {
  useEffect(() => {
    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <div>
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    </div>
  );
}

export default App;
