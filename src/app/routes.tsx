import { createBrowserRouter} from "react-router-dom";
import App from "./App";
// 로그인 관련 페이지
import MainLoginPage from "../pages/login/MainLoginPage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/login/SignupPage";
import CompleteSignupPage from "../pages/login/CompleteSignupPage"; 
import LoginOnboardPage1 from "../pages/login/LoginOnboard1";
import LoginOnboardPage2 from "../pages/login/LoginOnboard2";

// 메인 페이지
import MainPage from "../pages/main/MainPage";

// 아동급식카드 관련 페이지
import ChildCardWrapper from "../components/ChildCardWrapper";
import ChildCardOnBoard2 from "../pages/child_card/ChildCardOnBoard2";
import ChildCardScan from "../pages/child_card/ChildCardScan";
import ChildCardUpload from "../pages/child_card/ChildCardUpload";



export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
    
    { path: "/", element: <MainLoginPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/login/onboard1", element: <LoginOnboardPage1 /> },
    { path: "/login/onboard2", element: <LoginOnboardPage2 /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/signup/complete", element: <CompleteSignupPage /> },

    { path: "/main", element: <MainPage /> },

    { path: "/childcard", element:<ChildCardWrapper/>}, //아동급식카드
    { path: "/childcard/onboard2", element: <ChildCardOnBoard2 /> },
    { path: "/childcard/scan", element:<ChildCardScan />},
    { path: "/childcard/upload", element:<ChildCardUpload />},

    ],
  },
]);
