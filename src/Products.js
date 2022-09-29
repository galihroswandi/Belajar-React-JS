import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {

    const url = 'https://fakestoreapi.com/products';
    const [products, setProduct] = useState([]);

    const getDataProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getDataProducts();
    })

    return(
        <div className="container">
            <div className="row d-flex justify-content-center ">
            <h1>My Products</h1>
                {products.map( product => {
                    return(
                        <div className="col-3 mx-1 my-1">
                            <CardProduct 
                                key={product.id} 
                                title={product.title} 
                                price={product.price} 
                                description={product.description}
                                image={product.image}
                            />
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
     
    function CardProduct(props) {
        return (
          <Card style={{ width: '18rem', boxSizing : "border-box", padding : ".5rem"}}>
            <Card.Img variant="top" src={props.image} height="200rem" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <div className="price fs-1 my-2">${props.price}</div>
              <Button variant="primary" style={{textTransform : "capitalize"}}>add to cart</Button>
            </Card.Body>
          </Card>
        );
    }

}

export default Products;