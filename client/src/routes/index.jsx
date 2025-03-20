import HomePage from "../pages/users/HomePage/HomePage";
import FaqPage from "../pages/users/FaqPage/FaqPage";
import ContactPage from "../pages/users/ContactPage/ContactPage"
import SignUpPage from "../pages/users/SignUpPage/SignUpPage";
import SignInPage from "../pages/users/SignInPage/SignInPage";
import ResetPasswordPage from "../pages/users/ResetPassPage/ResetPassPage"
import VerifyCodePage from "../pages/users/ResetPassPage/VerifyCodePage"
import NewPasswordPage from "../pages/users/ResetPassPage/NewPasswordPage"
import Verificationpage from "../pages/users/SignUpPage/VerificationPage"

export const routes = [
  {
    path: "/users/HomePage",
    element: <HomePage />,
  },
  {
    path: "/users/FaqPage",
    element: <FaqPage />,
  },
  {
    path: "/users/ContactPage",
    element: <ContactPage />,
  },
  {
    path: "/users/SignUpPage",
    element: <SignUpPage />,
  },
  {
    path: "/users/SignInPage",
    element: <SignInPage />,
  },
  {
    path: "/users/Verificationpage",
    element: <Verificationpage />,
  },
  {
    path: "/users/ResetPasswordPage",
    element: <ResetPasswordPage />,
  },
  {
    path: "/users/VerifyCodePage",
    element: <VerifyCodePage />,
  },
  {
    path: "/users/NewPasswordPage",
    element: <NewPasswordPage />,
  },
]; 
