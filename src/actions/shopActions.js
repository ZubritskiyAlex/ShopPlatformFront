
import axios from "axios";
import {
    SHOP_DETAILS_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_LIST_FAIL,
    SHOP_LIST_REQUEST,
    SHOP_LIST_SUCCESS
} from "../constants/shopConstants";

export const listShops = () =>  async (dispatch) => {
    try {
        dispatch({type: SHOP_LIST_REQUEST})

        const {data} = await axios.get('/api/shops/')

        dispatch({
            type:SHOP_LIST_SUCCESS,
            payload: data
        })
    }
    catch (error){
        dispatch({
            type: SHOP_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listShopDetails = (id) =>  async (dispatch) => {
    try {
        dispatch({type: SHOP_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/shops/${id}`)
        console.log(data)
        dispatch({
            type: SHOP_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error){
        dispatch({
            type: SHOP_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}