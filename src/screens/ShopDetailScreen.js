import React from "react";
import {Link} from 'react-router-dom'
import {Row, Col, Image, Button, Card, ListGroup, CardDeck} from "react-bootstrap";
import shops from '../shops'

function ShopDetailScreen({match}) {
    const shop = shops.find((p) =>p._id ==match.params.id)
    return(
        <div>
            <Link to ='/shops'> Go Back </Link>
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
                            Category:{shop.category}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Owner: {shop.owner}
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>
    )

}
export default ShopDetailScreen
