import { createBrowserRouter } from "react-router";
import { MainLayout } from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
]);
