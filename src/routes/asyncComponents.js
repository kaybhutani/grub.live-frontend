import { lazy } from "react";

const asyncComponents = {
  Home: lazy(() => import("../pages/Home")),
  CreateMenu: lazy(() => import("../pages/CreateMenu")),
  HowItWorks: lazy(() => import("../pages/HowItWorks")),
  QrDownload: lazy(() => import("../pages/QrDownload")),
  About: lazy(() => import("../pages/About")),
  Contact: lazy(() => import("../pages/Contact")),
};

export default asyncComponents;
