import React, {useEffect} from "react";
import {Link} from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {listShopDetails} from "../actions/shopActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ShopDetailScreen({match}) {

    const dispatch = useDispatch()
    const shopDetails = useSelector(state => state.shopDetails)
    const {loading, error, shop} = shopDetails

    useEffect(() => {
            dispatch(listShopDetails(match.params.id))

        }, [dispatch, match])



        return(
        <div>
            <Link to ='/shops'> Go Back </Link>

                {loading ? <Loader/>
                    : error ?
                        <Message variant='danger'>{error}</Message>
                           :(
                                 <Row>
                                <Col md={6}>
                                    <Image src = {shop.image} alt={shop.name} fluid />
                                </Col>

                                <Col md={3}>
                                    <Card>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                          <h3> {shop.name} </h3>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Description: {shop.description}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Category: {shop.category}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                           Owner: {shop.owner}
                                        </ListGroup.Item>

                                    </ListGroup>
                                    </Card>
                                </Col>
                                <Col md={3}></Col>
                            </Row>

                        )}
        </div>
        )
}
export default ShopDetailScreen