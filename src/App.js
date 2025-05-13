import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import GlobalStyle from "./styles/globalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
