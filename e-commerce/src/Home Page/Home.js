import React from 'react';
import logo from './logo.png'
import './home.css';
import { Avatar } from '@mui/material';
import { Button , Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <>
        <div className="navigation">
            <img src={logo} alt="logo"/>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{
                    float: "right" , marginRight: "75px" , marginTop: "12px"
                }}/>
                <Link to="/ad-area"><Button variant="outline-primary" style={{
                    float: "right" , marginRight: "25px" , marginTop: "15px" , color: "white"
                }}>Post An Ad</Button></Link>
                <input type="text" placeholder="Search" style={{
                    width: "500px" , height: "40px" , marginLeft: "425px" , marginTop: "80px" , 
                    border: "2px solid grey" , borderRadius: "10px"
                }}/>
        </div>
        <div className="body">
            <Card style={{ width: '18rem' , marginLeft: "40px" , marginTop: "25px" , float: "left"}}>
                {/* <Card.Img variant="top" src={logo} /> */}
                <Card.Body>
                    <Card.Title>Product 1</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="outline-primary">View Product</Button>
                    <Button variant="primary" style={{float: "right" , width: "100px"}}>Buy Now</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' , marginLeft: "45px" , marginTop: "25px" , float: "left"}}>
                {/* <Card.Img variant="top" src={logo} /> */}
                <Card.Body>
                    <Card.Title>Product 2</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="outline-primary">View Product</Button>
                    <Button variant="primary" style={{float: "right" , width: "100px"}}>Buy Now</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' , marginRight: "45px" , marginTop: "25px" , float: "right"}}>
                {/* <Card.Img variant="top" src={logo} /> */}
                <Card.Body>
                    <Card.Title>Product 4</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="outline-primary">View Product</Button>
                    <Button variant="primary" style={{float: "right" , width: "100px"}}>Buy Now</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' , marginRight: "40px" , marginTop: "25px" , float: "right"}}>
                {/* <Card.Img variant="top" src={logo} /> */}
                <Card.Body>
                    <Card.Title>Product 3</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="outline-primary">View Product</Button>
                    <Button variant="primary" style={{float: "right" , width: "100px"}}>Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Home;