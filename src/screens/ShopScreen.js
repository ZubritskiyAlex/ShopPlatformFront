import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import Shop from "../components/Shop";
import {useDispatch, useSelector} from "react-redux";
import {listShops} from "../actions/shopActions";
import Loader from "../components/Loader";
import Message from "../components/Message";


function ShopScreen() {
    const dispatch = useDispatch()
    const shopList = useSelector(state => state.shopList)
    const {error, loading, shops} = shopList

    useEffect(() => {
        dispatch(listShops())

        }, [dispatch])


    return(
        <div>
        <h1>Shops</h1>
            {loading ? <Loader/>
                    : error ? <Message variant='danger'>{error}</Message>
                           :(
                            <Row>
                                {shops.map(shop => (
                                    <Col key={shop._id} sm={12} md = {6} lg={4} xl ={3}>
                                        <h3>{shop.name}</h3>
                                        <Shop shop={shop}/>
                                    </Col>
                                ))}
                            </Row>
                    )}
    </div>
    )
}

export default ShopScreen