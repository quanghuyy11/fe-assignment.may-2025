import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Image1 from "./pages/assignment1/image1/image1.tsx";
import Image2 from "./pages/assignment1/image2/image2.tsx";
import Image3 from "./pages/assignment1/image3/image3.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/image1", element: <Image1 /> },
  { path: "/image2", element: <Image2 /> },
  { path: "/image3", element: <Image3 /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
