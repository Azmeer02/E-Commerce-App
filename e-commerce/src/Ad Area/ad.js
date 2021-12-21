import React, { useState } from 'react'
import './ad.css'
import {getStorage , ref , uploadBytes , getDownloadURL} from 'firebase/storage';
import { Button,Navbar,Container,Nav,Form,FormControl } from 'react-bootstrap';

function Ad() {
    const initialValues = { description: "", price: "", photos: [], address: "" };
    const [data, setData] = useState(initialValues);
    const [photos, setPhotos] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    async function handleSubmit(e) {
        e.preventDefault();

        const { description, price, address } = data;
        if (description && price && photos && address) {
            let temp = [];
            // console.log("Photos = " + photos)
            let ID = Date.now();
            Object.values(photos).map((items,index) => {
                const store = getStorage();
                let imagRef = ref(store, `images/${ID}/Image ${index+1}`);
                return uploadBytes(imagRef,items).then(() => {
                    getDownloadURL(imagRef).then((url) => {
                        // console.log(url,"url");
                        temp.push(url);
                        if (temp.length === photos.length) {
                            (async function () {
                                const api = fetch("https://e-commerce-auth-3bd56-default-rtdb.firebaseio.com/userAds.json", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "e-commerce/json"
                                    },
                                    body: JSON.stringify({
                                        description,
                                        price,
                                        photos: temp,
                                        address,
                                    }),
                                })
                                if (api) {
                                    setData({ description: "", price: "", address: "" });
                                    setPhotos([]);
                                    alert("Ad Posted!");
                                } else {
                                    alert("Please fill all the Inputs!!");
                                }
                            }())
                        }
                    });
                });
            });
        } else {
            alert("Please fill all the Inputs!!")
        }
    };
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Ad Posting</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/home">Back To Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="forms">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><b>Product Type</b></Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Product Type</option>
                            <option value="1">Vehicles</option>
                            <option value="2">Electronics</option>
                            <option value="3">Appliances</option>
                            <option value="4">Mobiles</option>
                            <option value="5">Hardware & Accessories</option>
                            <option value="6">House</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Product Description</b></Form.Label>
                        <Form.Control as="textarea" rows={3} value={data.description}
                            name="description" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Price</b></Form.Label>
                        <Form.Control type="number" value={data.price} name="price" onChange={handleChange} />
                    </Form.Group><br />
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label><b>Upload Photos</b></Form.Label>
                        <Form.Control type="file" name="photos" onChange={(e) => setPhotos(e.target.files)}
                            multiple />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Address</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter your Current Address"
                            value={data.address} name="address" onChange={handleChange} />
                    </Form.Group>
                    <Button onClick={handleSubmit} variant="primary" style={{ float: "right" }}>Post Ad</Button>
                </Form> 
            </div>
        </>
    )
}

export default Ad;