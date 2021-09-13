import React from "react";
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Shop({shop}) {
    return(
        <Card className="my-3 p-3 rounded">
            <Link to ={`/shop/${shop._id}` }>
                <Card.Img src={shop.image}/>

            <Card.Body>
                <Link to={`/shop/${shop._id}`}>
                <Card.Title>
                    <strong>{shop.name}</strong>
                </Card.Title>
                </Link>


             <Card.Text as = "div">
                 <div className="my-3">
                    Description:&nbsp;  {shop.description}
                 </div>
             </Card.Text>

                <Card.Text as="h3">
                    Category:&nbsp; {shop.category}
                </Card.Text>

                <Card.Text as="h3">
                    Owner: &nbsp; {shop.owner}
                </Card.Text>
            </Card.Body>
            </Link>
        </Card>
    )
}

export default Shop