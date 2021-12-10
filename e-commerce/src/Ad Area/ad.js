import React, { useEffect, useState } from 'react'
import './ad.css'
import logo from './logo.png'
import { Avatar } from '@mui/material';
import { Form , Button , Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import {userCollection} from '../Home Page/Home';


function Ad(){
    const initialValues = {description: "" , price: "" , photos: "" , address: ""};
    const [data , setData] = useState(initialValues);
    const [error , setError] = useState({});
    const [submit , setSubmit] = useState(false);

    const [desc , setDesc] = useState("");
    const [price , setPrice] = useState(0);
    const [address , setAddress] = useState("");

    // Form Validation starts
    function handleChange(e){
        const {name , value} = e.target;
            setData({...data , [name]: value});
            // console.log(name);
            console.log(data)
    };
    function handleSubmit(e){
        e.preventDefault();
        setError(validation(data));
        setSubmit(true);
    };
    useEffect(()=>{
        // console.log(error);
        if(Object.keys(error).length === 0 && submit){
            console.log(data)
        }
    },[error]);
    function validation(values){
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.description){
            errors.description = "Product Description is Required!";
        }
        if(!values.price){
            errors.price = "Please mention the Price!";
        }
        if(!values.photos){
            errors.photos = "Please Upload atleast 5 photos!";
        }
        if(!values.address){
            errors.address = "Please enter your address!";
        }
        return errors;
    };
    // Form Validation ends
    // Ad Posting Start
    async function adPost(){
        // setDesc(desc);
        // console.log(data);
    }
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
        <div>
            {Object.keys(error).length === 0 && submit ? (
                <div><Alert variant="success">Ad Posted</Alert></div>):(
                    <pre>{JSON.stringify(data, undefined, 2)}</pre>
                    // {error && <Alert variant="danger">{error}</Alert>}
            )}
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
                    <Form.Control as="textarea" rows={3} value={data.description}
                        name="description" onChange={handleChange}/>
                </Form.Group>
                {error.description && <Alert variant="danger">{error.description}</Alert>}
                <Form.Group>
                    <Form.Label><b>Price</b></Form.Label>
                    <Form.Control type="number" value={data.price} name="price" onChange={handleChange}/>
                </Form.Group><br/>
                {error.price && <Alert variant="danger">{error.price}</Alert>}
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label><b>Upload Photos</b></Form.Label>
                    <Form.Control type="file" value={data.photos} name="photos" 
                        onChange={handleChange} multiple />
                </Form.Group>
                {/* {error.photos && <Alert variant="danger">{error.photos}</Alert>} */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Address</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter your Current Address"
                        value={data.address} name="address" onChange={handleChange}/>
                </Form.Group>
                {error.address && <Alert variant="danger">{error.address}</Alert>}
                <Button onClick={handleSubmit} variant="primary" style={{ float: "left" }}>Submit</Button>
                <Button onClick={adPost} variant="primary" style={{ float: "right" }}>Post Ad</Button>
            </Form>
        </div>
        </>
    )
}

export default Ad;