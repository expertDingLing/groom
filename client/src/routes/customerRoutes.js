import Home from '../containers/customer/home';
import ChangeBooking from '../containers/customer/booking/change_booking';
import Video from '../containers/customer/favorites';
import Account from '../containers/customer/account';
import Profile from '../containers/customer/profile';
import ID from '../containers/customer/home/ID';
import Email from '../containers/customer/home/email';
import Create from '../containers/customer/home/create';
import OfferRefund from '../containers/customer/messages/offer';
import Search from '../containers/customer/home/search';
import CustomerRefund from '../containers/customer/messages/refund';
import Message from '../containers/customer/messages';
import CancelApprovedBooking from '../containers/customer/booking/cancel_approved_booking';
import RecentBooking from '../containers/customer/booking/recent_booking';
import ReviewShop from '../containers/customer/messages/review_shop';
import BookingDetail from '../containers/customer/booking/booking_detail';
import CreatingFav from '../containers/customer/favorites/creating_fav';
import CustomerBooking from '../containers/customer/booking/customer_booking';
import Complaint from '../containers/customer/messages/complaint';
import BookingApproval from '../containers/customer/booking/booking_approval';
import BookingRequest from '../containers/customer/booking/booking_request';
import WaitList from '../containers/customer/waitList';
import Dispute from '../containers/customer/dispute';
import ShopDetails from '../containers/customer/shopDetails';
import ServiceDetails from '../containers/customer/serviceDetails';
import Overview from '../containers/customer/booking/overview';
import Help from '../containers/customer/help';

const routes = [
    { path: '/customer/home', name: 'Home', component: Home },
    { path: '/customer/change_booking', name: 'ChangeBooking', component: ChangeBooking },
    { path: '/customer/video', name: 'Video', component: Video },
    { path: '/customer/account', name: 'Account', component: Account },
    { path: '/customer/profile', name: 'Profile', component: Profile },
    { path: '/customer/id', name: 'ID', component: ID },
    { path: '/customer/create', name: 'Create', component: Create },
    { path: '/customer/offer_refund', name: 'OfferRefund', component: OfferRefund },
    { path: '/customer/search', name: 'Search', component: Search },
    { path: '/customer/customer_refund', name: 'CustomerRefund', component: CustomerRefund },
    { path: '/customer/message', name: 'Message', component: Message },
    { path: '/customer/cancel_approved_booking', name: 'CancelApprovedBooking', component: CancelApprovedBooking },
    { path: '/customer/recent_booking', name: 'RecentBooking', component: RecentBooking },
    { path: '/customer/review_shop', name: 'ReviewShop', component: ReviewShop },
    { path: '/customer/booking_detail', name: 'BookingDetail', component: BookingDetail },
    { path: '/customer/creating_fav', name: 'CreatingFav', component: CreatingFav },
    { path: '/customer/email', name: 'Email', component: Email },
    { path: '/customer/customer_booking', name: 'CustomerBooking', component: CustomerBooking },
    { path: '/customer/complaint', name: 'Complaint', component: Complaint },
    { path: '/customer/booking_approval', name: 'BookingApproval', component: BookingApproval },
    { path: '/customer/booking_request', name: 'BookingRequest', component: BookingRequest },
    { path: '/customer/wait-list', name: 'WaitList', component: WaitList },
    { path: '/customer/dispute', name: 'Dispute', component: Dispute },
    { path: '/customer/shop-details', name: 'ShopDetails', component: ShopDetails },
    { path: '/customer/service-details', name: 'ServiceDetails', component: ServiceDetails },
    { path: '/customer/overview', name: 'Overview', component: Overview },
    { path: '/customer/help', name: 'Help', component: Help },
];

export default routes;