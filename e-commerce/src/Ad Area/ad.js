import React, { useState } from 'react'
import './ad.css'
import logo from './logo.png'
// import { getDatabase } from 'firebase/database';
import {getStorage,listAll,ref, uploadBytes, getDownloadURL} from 'firebase/storage';
// import fireDB from '../firebaseDatabase';
// import firebase from "firebase";
import { Avatar } from '@mui/material';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Ad() {
    const initialValues = { description: "", price: "", photos: [], address: "" };
    const [data, setData] = useState(initialValues);
    const [photos, setPhotos] = useState([]);

    function handleChange(e) {
        // if (e.target?.files?.length > 0) {
        //     // setData({ ...data, photos: [e.target.files] })
        //     // console.log(data,"data");
        //     const {name2, value} = e.target;
        //     console.log(photos)
        // } else {
        //     // console.log(data);
        // }
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        // console.log(photos,"photos")
        // console.log(data);
    };
    async function handleSubmit(e) {
        e.preventDefault();

        const { description, price, address } = data;
        if (description && price && photos && address) {
            let temp = [];
            // console.log("Photos = " + photos)
            let ID = Date.now();
            Object.values(photos).map((items,index) => {
                // const db = getDatabase();
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
                                    setData({ description: "", price: "", photos: "", address: "" });
                                    alert("Ad Posted!");
                                } else {
                                    alert("Please fill all the Inputs!!");
                                }
                            }())
                        }
                    });
                });
            });
            // const api = await fetch("https://e-commerce-auth-3bd56-default-rtdb.firebaseio.com/userAds.json" , {
            //     method: "POST",
            //     headers: {
            //         "Content-Type" : "e-commerce/json"
            //     },
            //     body: JSON.stringify({
            //         description,
            //         price,
            //         photos,
            //         address,
            //     }),
            // })
            // if(api){
            //     setData({description: "" , price: "" , photos: "" , address: ""});
            //     alert("Ad Posted!");
            // }else{
            //     alert("Please fill all the Inputs!!");
            // }
        } else {
            alert("Please fill all the Inputs!!")
        }
    };
    return (
        <>
            <div className="navigation2">
                <img src={logo} alt="logo" />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{
                    float: "right", marginRight: "75px", marginTop: "12px"
                }} />
                <h2 style={{ color: "white", textAlign: "center" }}>AD POSTING</h2>
                <Link to="/home"><Button variant="outline-primary" style={{
                    float: "right", marginRight: "25px", marginTop: "15px", color: "white"
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
                        <Form.Control as="textarea" rows={3} value={data.description}
                            name="description" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><b>Price</b></Form.Label>
                        <Form.Control type="number" value={data.price} name="price" onChange={handleChange} />
                    </Form.Group><br />
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label><b>Upload Photos</b></Form.Label>
                        <Form.Control type="file" name="photos"
                            onChange={(e) => setPhotos(e.target.files)}
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