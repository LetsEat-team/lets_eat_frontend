import { createBrowserRouter,Navigate} from "react-router-dom";
import App from "./App";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
        
    { index: true, element: <Navigate to="/login" replace /> },

    { path: "/login", element: <LoginPage /> },

    //{ path: "/페이지", element: <페이지/> },

    ],
  },
]);
