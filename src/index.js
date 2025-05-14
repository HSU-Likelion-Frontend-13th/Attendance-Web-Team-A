import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 공통 컴포넌트
    children: [
      { path: "", element: <Navigate to="/login" replace /> },
      { path: "login", element: <Login /> }, // 로그인 페이지
      { path: "main", element: <Main /> }, // 메인 페이지
      { path: "my", element: <MyPage /> }, // 마이 페이지
      { path: "*", element: <NotFound /> }, // 404 페이지
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
