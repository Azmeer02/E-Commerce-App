import React, { useEffect, useState } from "react";
import "./view.css";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { Paper } from "@mui/material";
import { Carousel,Button,Navbar,Container,Nav,Form,FormControl } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';

function View() {
    const [data, setData] = useState();
    const router = useLocation();
    const { product , productId } = router.state;
        console.log(productId);

    useEffect(() => {
        const db = getDatabase();
        const DataRef = ref(db, "userAds/");
        onValue(DataRef, (snapshot) => {
            const ads = snapshot.val();
            // console.log(ads);
            if (snapshot.val() !== null) {
                setData(ads);
            } else {
                setData({});
            }
        });
    }, []);
    function deleteData(product) {
        const db = getDatabase();
        remove(ref(db, 'userAds/' + productId))
            .then(() => {
                console.log("Succeed")
            })
            .catch((error) => {
                console.log("Error")
            })
    }
    return (
        <div>
            <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="#">Product Details</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/home">Back To Home</Nav.Link>
                        <Nav.Link href="/home" onClick={() => deleteData(productId[0])}>Delete Product?</Nav.Link>
                        {/* <Nav.Link href="/update"  state={{product: product, productId: productId}}>Update Product</Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                {data && Object.entries(data).map(item => (<></>))}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={product.photos[0]} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={product.photos[1]} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={product.photos[2]} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={product.photos[3]} alt="Fourth slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={product.photos[4]} alt="Fifth slide"/>
                    </Carousel.Item>
                </Carousel><br/>
                <Paper elevation={6}>
                    <h2 style={{textAlign: "center"}}>Product Details: {product.description}</h2>
                    <h2 style={{textAlign: "center"}}>Product Price: {product.price}</h2>
                    <h2 style={{textAlign: "center"}}>Seller Address: {product.address}</h2>
                </Paper>
            </div><br/>
            <div>
                <Link to='/update/' state={{ product: product, productId: productId }}>
                    <Button variant="outline-primary">Update Product</Button></Link>
            </div>
        </div>
    )
}

export default View;