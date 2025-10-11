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
import ChildCardWrapper from "../components/OnboardingWrapper/ChildCardWrapper";
import ChildCardOnBoard2 from "../pages/child_card/ChildCardOnBoard2";
import ChildCardScan from "../pages/child_card/ChildCardScan";
import ChildCardUpload from "../pages/child_card/ChildCardUpload";
import ChildCardOnBoard from "../pages/child_card/ChildCardOnBoard";
import ConvyWrapper from "../components/OnboardingWrapper/ConvyWrapper";
import ConvyOnBoard from "../pages/convy/ConvyOnBoard";
import ConvyOnBoard2 from "../pages/convy/ConvyOnBoard2";
import ConvyScan from "../pages/convy/ConvyScan";
import ConvyUpload from "../pages/convy/ConvyUpload";
import ConvyList from "../pages/convy/convyList";

import ShopListPage from "../pages/shop/ShopListPage";
import ShopOnBoard from "../pages/shop/ShopOnboard1";
import ShopOnBoard2 from "../pages/shop/ShopOnboard2";



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
    { path: "/childcard/onboard1", element: <ChildCardOnBoard/> },
    { path: "/childcard/onboard2", element: <ChildCardOnBoard2 /> },
    { path: "/childcard/scan", element:<ChildCardScan />},
    { path: "/childcard/upload", element:<ChildCardUpload />},

    { path: "/convy", element:<ConvyWrapper/>}, //편의점 품목 인식
    { path: "/convy/onboard1", element: <ConvyOnBoard/> },
    { path: "/convy/onboard2", element: <ConvyOnBoard2 /> },
    { path: "/convy/scan", element:<ConvyScan />},
    { path: "/convy/upload", element:<ConvyUpload />},
    { path: "/convy/list", element:<ConvyList />},

    { path: "/shop/list", element:<ShopListPage/>}, //shop
    { path: "/shop/onboard1", element: <ShopOnBoard/> },
    { path: "/shop/onboard2", element: <ShopOnBoard2 /> },

    ],
  },
]);
