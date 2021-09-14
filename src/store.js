import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {
    productCreateReducer,
    productDeleteReducer,
    productDetailsReducer,
    productListReducer, productReviewCreateReducer, productTopRatedReducer, productUpdateReducer
} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import {
    userDeleteReducer,
    userDetailsReducer, userListReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer, userUpdateReducer
} from "./reducers/userReducer";

import {
    orderCreateReducer, orderDeliverReducer,
    orderDetailsReducer,
    orderListMyReducer,
    orderListReducer,
    orderPayReducer
} from "./reducers/orderReducer";
import {shopDetailsReducer, shopListReducer} from "./reducers/shopReducers";

const reducer = combineReducers({

    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate:productUpdateReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    shopList:shopListReducer,
    shopDetails:shopDetailsReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}




const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {userInfo: userInfoFromStorage}

}


const middleware = [thunk]

const store = createStore(reducer, initialState,

    composeWithDevTools(applyMiddleware(...middleware)))


export default store