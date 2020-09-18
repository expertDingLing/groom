import Email from '../containers/provider/email'
import Shop from '../containers/provider/shop'
import SpecialShop from '../containers/provider/shop/specialShop'
import Performance from '../containers/provider/performance'
import DecisionRefund from '../containers/provider/decisionRefund'
import Account from '../containers/provider/account'


const routes = [
    { path: '/provider/email', name: 'Email', component: Email },
    { path: '/provider/shops', name: 'Shop', component: Shop },
    { path: '/provider/special-shop', name: 'SpecialShop', component: SpecialShop },
    { path: '/provider/performance', name: 'Performance', component: Performance },
    { path: '/provider/decision-refund', name: 'DecisionRefund', component: DecisionRefund },
    { path: '/provider/account', name: 'Account', component: Account }

];

export default routes;