import React from "react";
import {useDispatch, useSelector} from "react-redux";


function PaymentScreen({history}){

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()


    return(
        <div>
            Payment
        </div>

    )

}

export default PaymentScreen