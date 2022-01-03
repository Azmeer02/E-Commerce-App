import React, { useEffect, useState } from "react";
import "./home.css";
import logo from '../OLX_2019.svg.png';
import logo2 from '../wallpaper.6416002a042322099dbfec286d7574f4.jpg';
import { styled } from '@mui/material/styles';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import SearchIcon from '@mui/icons-material/Search';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { InputLabel, MenuItem, Select, FormControl, IconButton, InputBase, Box, Grid, Paper } from '@mui/material';
import { getDatabase, ref, onValue } from "firebase/database";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

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
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  return (
    <>
    <div className="header">
      <div className="container">
        <div className="nav-top">
          <img src={logo} alt="logo" />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <StoreMallDirectoryOutlinedIcon style={{ marginLeft: "50px", color: "black" }} />MALL
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <TimeToLeaveOutlinedIcon style={{ marginLeft: "25px", color: "black" }} />MOTORS
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            <ApartmentOutlinedIcon style={{ marginLeft: "25px", color: "black" }} />PROPERTY
          </Link>
        </div>
        <div className="nav-bottom">
            <FormControl className="dropdown" >
              <InputLabel id="demo-simple-select-label" >Pakistan</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Pakistan">
                <MenuItem value={10}>Azad Kashmir, Pakistan</MenuItem>
                <MenuItem value={20}>Balochistan, Pakistan</MenuItem>
                <MenuItem value={30}>Islamabad Capital Territory</MenuItem>
                <MenuItem value={40}>Khyber Pakhtunkhwa, Pakistan</MenuItem>
                <MenuItem value={50}>Northern Areas, Pakistan</MenuItem>
                <MenuItem value={60}>Punjab, Pakistan</MenuItem>
                <MenuItem value={70}>Sindh, Pakistan</MenuItem>
              </Select>
            </FormControl>
        <div className="sell">
          <InputBase className="search" sx={{ ml: 1, flex: 1 }} placeholder="Find Cars, Mobile Phones and more..."
            inputProps={{ 'aria-label': 'search google maps' }} style={{ backgroundColor: "white" }} />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon style={{fontSize: "34px"}} className="searchIcon"/>
          </IconButton>
          <Link to="/ad-area" className="postLink">
            <DriveFolderUploadOutlinedIcon  style={{fontSize: "40px"}} className="uploadIcon"/>Post
          </Link>
          </div>
        </div>
      </div>
    </div><br/>
    {/* Navigation End */}
    {/* <div className="container"> */}
      <div className="image">
        <img src={logo2} alt="cover" />
      </div><br />
    {/* Image End */}
      <div className="ads">
        <h3>Fresh Recommendations</h3>
        <Box sx={{ width: '100%' }} className="grids">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} >
            {data && Object.entries(data).map(item => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                <Item style={{ border: "1px solid darkgrey", boxShadow: "5px 10px 8px #888888" }}>
                  <Card key={item} style={{ border: "2px solid lightgrey" }}>
                    <Card.Img variant="top" src={item[1].photos[4]} />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>Product 1</Card.Title>
                      <Card.Text style={{ textAlign: "center", fontSize: "20px" }}>
                        {item[1].description}
                      </Card.Text>
                      <Card.Text style={{ textAlign: "center", fontSize: "15px" }}>
                        {item[1].price}
                      </Card.Text>
                      <Link to='/view-product/' state={{ product: item[1], productId: item[0] }}>
                        <Button variant="outline-primary" className="product-btn">View Product</Button></Link>
                      <Button variant="primary" className="buy-btn" style={{ float: "right" }}>Buy Now</Button>
                    </Card.Body>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div><br />
    {/* Card End */}  
    {/* </div> */}
    <div className="footer">
        <div className="categories">
          <ul>
            <li className="heading">POPULAR CATEGORIES</li>
            <li className="first-li">Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>            
          </ul>
        </div>
        <div className="searches">
          <ul>
          <li className="heading">TRENDING SEARCHES</li>
            <li className="first-li">Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="about">
          <ul>
            <li className="heading">ABOUT US</li>
            <li className="first-li">Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="olx">
          <ul>
            <li className="heading">OLX</li>
            <li className="first-li">Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="follow">
          <ul>
            <li className="heading">Follow Us</li>
            <FontAwesomeIcon icon={faFacebookSquare} className="facebook" />
            <FontAwesomeIcon icon={faTwitterSquare} className="twitter" />
            <FontAwesomeIcon icon={faYoutubeSquare} className="youtube" />
            <FontAwesomeIcon icon={faInstagramSquare} className="instagram" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;