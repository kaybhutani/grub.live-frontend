import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./reducers/EditMenu.reducers";

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
});
