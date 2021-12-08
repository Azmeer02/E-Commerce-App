import React from 'react'
import './ad.css'
import logo from './logo.png'
import { Avatar } from '@mui/material';
import { Form , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Ad(){
    return (
        <>
        <div className="navigation2">
            <img src={logo} alt="logo"/>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{
                    float: "right" , marginRight: "75px" , marginTop: "12px"
                }}/>
                <h2 style={{color: "white" , textAlign: "center" }}>AD POSTING</h2>
                <Link to="/home"><Button variant="outline-primary" style={{
                    float: "right" , marginRight: "25px" , marginTop: "15px" , color: "white"
                }}>Back To Home</Button></Link>
        </div>
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
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.Label><b>Price</b></Form.Label>
                    <Form.Control type="text" placeholder="Normal text" />
                </Form.Group><br/>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label><b>Upload Photos</b></Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Address</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter your Current Address"/>
                </Form.Group><br/>
                <Button variant="primary" style={{ float: "right" }}>Back To Home</Button>
            </Form>
        </div>
        </>
    )
}

export default Ad;