import SignUp from '../containers/generic/auth/SignUp';
import SignUpForm from '../containers/generic/auth/SignUpForm';
import Login from '../containers/generic/auth/Login';
import SignIn from '../containers/generic/auth/SignIn';
import ForgotPassword from '../containers/generic/auth/ForgotPassword';
import AnotherAccount from '../containers/generic/auth/AnotherAccount';
import Confirmation from '../containers/generic/auth/Confirmation';
import ChangeNumber from '../containers/generic/auth/ChangeNumber';
import VerifyNumber from '../containers/generic/auth/VerifyNumber';

const routes = [
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signup-form', name: 'SignUpForm', component: SignUpForm },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/another-account', name: 'AnotherAccount', component: AnotherAccount },
  { path: '/confirmation', name: 'Confirmation', component: Confirmation },
  { path: '/change-number', name: 'ChangeNumber', component: ChangeNumber },
  { path: '/verify-number', name: 'VerifyNumber', component: VerifyNumber },
];

export default routes;
