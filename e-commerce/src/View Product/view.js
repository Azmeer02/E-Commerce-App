import React, { useEffect, useState } from "react";
import logo2 from "./logo.png";
import "./view.css";
import { getDatabase , ref , onValue , remove } from "firebase/database";
import { Avatar } from "@mui/material";
import { Carousel, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function View() {
    const [data, setData] = useState();
    useEffect(() => {
        const db = getDatabase();
        const DataRef = ref(db, "userAds/");
        onValue(DataRef, (snapshot) => {
            const ads = snapshot.val();
            console.log(ads);
            if (snapshot.val() !== null) {
                setData(ads);
            } else {
                setData({});
            }
        });
    }, []);
    function deleteData(item) {
        const db = getDatabase();
        remove(ref(db, 'userAds/' + item))
        .then(() => {
            console.log("Succeed")
        })
        .catch((error) => {
            console.log("Error")
            })
        }
    return (
        <>
        <div className="navigation3">
            <img src={logo2} alt="logo" />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
                style={{ float: "right", marginRight: "75px", marginTop: "12px" }} />
            <h2 style={{ color: "white", textAlign: "center" }}>PRODUCT DETAILS</h2>
            <Link to="/home"><Button variant="outline-primary" style={{
                float: "right", marginRight: "25px", marginTop: "15px", color: "white"
            }}>Back To Home</Button></Link>
        </div>
        <div className="body">
            {data && Object.entries(data).map(item => (
                // <Carousel>
                //     <Carousel.Item>
                //         <img className="d-block w-100" src={logo2}
                //             alt="First slide"/>
                //         <Carousel.Caption>
                //             <h3>First slide label</h3>
                //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                //         </Carousel.Caption>
                //     </Carousel.Item>
                //     <Carousel.Item>
                //         <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34"
                //             alt="Second slide"/>
                //         <Carousel.Caption>
                //             <h3>Second slide label</h3>
                //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                //         </Carousel.Caption>
                //     </Carousel.Item>
                //     <Carousel.Item>
                //         <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a"
                //             alt="Third slide"/>
                //         <Carousel.Caption>
                //             <h3>Third slide label</h3>
                //             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                //         </Carousel.Caption>
                //     </Carousel.Item>
                // </Carousel>
                <Card key={item} style={{ width: "18rem", marginLeft: "40px", marginTop: "25px", float: "left" }}>
                    <Card.Img variant="top" src={item[1].photos} />
                    <Card.Body>
                        <Card.Title>Product 1</Card.Title>
                        <Card.Text>
                            {item[1].description}
                        </Card.Text>
                        <Card.Text>
                            {item[1].price}
                        </Card.Text>
                        <Link to="/view-product"><Button variant="outline-primary" onClick={() => deleteData(item[0])}
                            id={item} style={{
                                width: "137px", marginLeft: "60px"
                            }}>Delete Product</Button></Link><br />
                        <Link to="/update"><Button variant="primary" style={{
                            marginLeft: "60px", marginTop: "5px"
                        }}>Update Product</Button></Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
        </>
    )
}

export default View;
