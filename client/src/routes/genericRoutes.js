import SignUp from '../containers/Auth/Signup'
import SignIn from '../containers/Auth/customerSignin'
import LogIn from '../containers/Auth/lgoin'
import Confirm from '../containers/Auth/confirm'


const routes = [
    { path: '/' },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
    { path: '/sign-in', name: 'SignIn', component: SignIn },
    { path: '/login', name: 'LogIn', component: LogIn },
    { path: '/confirm', name: 'Confirm', component: Confirm },
];

export default routes;