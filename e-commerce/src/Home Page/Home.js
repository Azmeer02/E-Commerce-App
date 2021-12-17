import React, { useEffect, useState } from "react";
import logo2 from "./logo2.png";
import "./home.css";
import { getDatabase, ref, onValue } from "firebase/database";
import { Avatar } from "@mui/material";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  // let [load, setload] = useState(false);
    useEffect(() => {
        const db = getDatabase();
        const DataRef = ref(db, "userAds/");
        onValue(DataRef, (snapshot) => {
            const ads = snapshot.val();
                // console.log(ads);
            if (snapshot.val() !== null) {
                setData(ads);
            }else{
                setData({});
            }
        });
  }, []);
  // let temp = [];
  //     Object.values(photos).map((items) => {
  //         let ID = Date.now();
  //         const db = getDatabase();
  //         let uploadimage = db.storage().ref().child("userAds/" + item);
  //         return uploadimage.put(items).then(() => {
  //           uploadimage.getDownloadURL().then((url) => {
  //             temp.push(url);
  //             if(temp.length === photos.length){
  //               productsdetailes.productImage = temp;
  //               firebase.database().ref("userAds/" + Date.now()).set(productsdetailes)
  //                 .then(() => {
  //                   // history.push("/");
  //                   setload(false);
  //                 });
  //             };
  //         });
  //     });
  // });
  return (
    <>
      <div className="navigation">
        <img src={logo2} alt="logo" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
            style={{float: "right",marginRight: "75px",marginTop: "12px"}}/>
          <Link to="/ad-area"><Button variant="outline-primary" style={{ 
            float: "right",marginRight: "25px",marginTop: "15px",color: "white"}}>Post An Ad</Button></Link>
        <input type="text" placeholder="Search" style={{
          width: "500px", height: "40px", marginLeft: "425px", marginTop: "80px",
          border: "2px solid grey", borderRadius: "10px"}}/>
      </div>
      <div className="body">
        {data && Object.entries(data).map(item=>(
          <Card key={item} style={{width: "18rem",marginLeft: "40px",marginTop: "25px",float: "left"}}>
            <Card.Img variant="top" src={item[1].photos} />
              <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Card.Text>
                    {item[1].description}
                  </Card.Text>
                  <Card.Text>
                    {item[1].price}
                  </Card.Text>
                  <Link to="/view-product"><Button variant="outline-primary">View Product</Button></Link>
                  <Button variant="primary" style={{ float: "right", width: "100px" }}>Buy Now</Button>
              </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;