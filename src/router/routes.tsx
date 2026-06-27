import { createBrowserRouter } from "react-router";
import { Root } from "../components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        lazy: () =>
          import("../pages/Home").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "about",
        lazy: () =>
          import("../pages/About").then((module) => ({
            Component: module.default,
          })),
      },
    ],
  },
]);
