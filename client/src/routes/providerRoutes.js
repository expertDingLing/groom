import Email from '../containers/provider/email'
import Shop from '../containers/provider/shop'
import SpecialShop from '../containers/provider/shop/specialShop'
import Performance from '../containers/provider/performance'
import DecisionRefund from '../containers/provider/decisionRefund'
import Account from '../containers/provider/account'
import Calendar from '../containers/provider/Calendar'
import Home from '../containers/provider/home'
import Inbox from '../containers/provider/inbox'
import Help from '../containers/provider/help'
import BookingHistory from '../containers/provider/bookingHistory'
import Refer from '../containers/provider/refer'
import Profile from '../containers/provider/profile'
import GiftCard from '../containers/provider/gift'
import Switch from '../containers/provider/switch'
import Creating from '../containers/provider/shop/creating_shop'
import Manage from '../containers/provider/shop/manage'
import Owner from '../containers/provider/shop/owner'
import Dashboard from '../containers/provider/dashboard'
import Unfinish from '../containers/provider/unfinish'
import Video from '../containers/provider/video'
import ManageService from '../containers/provider/service'
import ApproveBooking from '../containers/provider/bookingHistory/Approvebooking'
import ChangeBooking from '../containers/provider/bookingHistory/ChangeBooking'
import Offer from '../containers/provider/offer'
import Complaint from '../containers/provider/complaint'
import Promotion from '../containers/provider/promotion'
import PromotionTable from '../containers/provider/promotion/promotion_table'
import PromotionDetail from '../containers/provider/promotion/promotion_detail'
import ManageProduct from '../containers/provider/performance/manage_product'
import EditProduct from '../containers/provider/performance/edit_product'
import OfferRefund from '../containers/provider/offer/offer_refund'

const routes = [
    { path: '/provider/email', name: 'Email', component: Email },
    { path: '/provider/shops', name: 'Shop', component: Shop },
    { path: '/provider/special-shop', name: 'SpecialShop', component: SpecialShop },
    { path: '/provider/performance', name: 'Performance', component: Performance },
    { path: '/provider/decision-refund', name: 'DecisionRefund', component: DecisionRefund },
    { path: '/provider/account', name: 'Account', component: Account },
    { path: '/provider/calendar', name: 'Calendar', component: Calendar },
    { path: '/provider/home', name: 'Home', component: Home },
    { path: '/provider/inbox', name: 'Inbox', component: Inbox },
    { path: '/provider/help', name: 'Help', component: Help },
    { path: '/provider/booking-history', name: 'BookingHistory', component: BookingHistory },
    { path: '/provider/refer', name: 'Refer', component: Refer },
    { path: '/provider/profile', name: 'Profile', component: Profile },
    { path: '/provider/gift', name: 'GiftCard', component: GiftCard },
    { path: '/provider/switch', name: 'Switch', component: Switch },
    { path: '/provider/creating_shop', name: 'Creating', component: Creating },
    { path: '/provider/manage', name: 'Manage', component: Manage },
    { path: '/provider/owner', name: 'Owner', component: Owner },
    { path: '/provider/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/provider/unfinish', name: 'Unfinish', component: Unfinish },
    { path: '/provider/video', name: 'Video', component: Video },
    { path: '/provider/manage_service', name: 'ManageService', component: ManageService },
    { path: '/provider/listing', name: 'ApproveBooking', component: ApproveBooking },
    { path: '/provider/change_booking', name: 'ChangeBooking', component: ChangeBooking },
    { path: '/provider/offer', name: 'Offer', component: Offer },
    { path: '/provider/complaint', name: 'Complaint', component: Complaint },
    { path: '/provider/promotion', name: 'Promotion', component: Promotion },
    { path: '/provider/promotion_table', name: 'PromotionTable', component: PromotionTable },
    { path: '/provider/promotion_detail', name: 'PromotionTable', component: PromotionDetail },
    { path: '/provider/manage_product', name: 'ManageProduct', component: ManageProduct },
    { path: '/provider/edit_product', name: 'EditProduct', component: EditProduct },
    { path: '/provider/offer_refund', name: 'OfferRefund', component: OfferRefund },
];

export default routes;