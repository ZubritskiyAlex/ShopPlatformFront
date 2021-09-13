import React from "react";
import shops from '../shops'
import {Col, Row} from "react-bootstrap";
import Shop from "../components/Shop";

function ShopScreen() {
    return(
        <div>
        <h1>Shops</h1>
            <Row>
                {shops.map(shop => (
                    <Col sm={12} md = {6} lg={4} xl ={3}>
                        <h3>{shop.name}</h3>
                        <Shop shop={shop}/>
                    </Col>
                ))}
            </Row>
    </div>
    )
}

export default ShopScreen