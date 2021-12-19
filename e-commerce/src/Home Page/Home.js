import React, { useEffect, useState } from "react";
import "./home.css";
import { getDatabase, ref, onValue } from "firebase/database";
import {Button,Card,Navbar,Container,Nav,Form,FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
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
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Syed's Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/ad-area">Post An Ad?</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="ads">
        {data && Object.entries(data).map(item => (
          <Card key={item} style={{ width: "18rem", marginLeft: "60px", marginTop: "30px", float: "left" }}>
          {/* <Card key={item} style={{ width: "18rem", justifyContent: "center" , alignItems: "center"}}> */}
            <Card.Img variant="top" src={item[1].photos[4]} />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                {item[1].description}
              </Card.Text>
              <Card.Text>
                {item[1].price}
              </Card.Text>
              <Link to='/view-product/' state={{ product: item[1], productId: item[0] }}>
                <Button variant="outline-primary">View Product</Button></Link>
              <Button variant="primary" style={{ float: "right", width: "100px" }}>Buy Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;