import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Image1 from "./pages/assignment1/image1/image1.tsx";
import Image2 from "./pages/assignment1/image2/image2.tsx";
import Image3 from "./pages/assignment1/image3/image3.tsx";
import Assignment2 from "./pages/assignment2/assignment2.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/image1", element: <Image1 /> },
  { path: "/image2", element: <Image2 /> },
  { path: "/image3", element: <Image3 /> },
  { path: "/assignment2", element: <Assignment2 /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
