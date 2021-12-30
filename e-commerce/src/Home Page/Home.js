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
import {InputLabel,MenuItem,Select,FormControl,IconButton,InputBase,Box,Grid,Paper} from '@mui/material';
import { getDatabase, ref, onValue } from "firebase/database";
import {Button,Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faTwitterSquare,faYoutubeSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

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
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div className="navigation" style={{backgroundColor: "rgb(230, 240, 240)" , padding: "5px"}}>
        <img src={logo} alt="logo"/>
        <Link to="" style={{textDecoration: "none" , color: "black"}}>
          <StoreMallDirectoryOutlinedIcon style={{marginLeft: "50px" , color: "black"}}/>MALL
        </Link>
        <Link to="" style={{textDecoration: "none" , color: "black"}}>
          <TimeToLeaveOutlinedIcon style={{marginLeft: "25px" , color: "black"}}/>MOTORS
        </Link>
        <Link to="" style={{textDecoration: "none" , color: "black"}}>
          <ApartmentOutlinedIcon style={{marginLeft: "25px" , color: "black"}}/>PROPERTY
        </Link>
      </div>
      <div className="search" style={{backgroundColor: "rgb(230, 240, 240)" , paddingTop: "20px"}}>
        <FormControl style={{marginLeft: "25px" , backgroundColor: "white"}}>
        <InputLabel id="demo-simple-select-label">Pakistan</InputLabel>
          <Select style={{width: "275px"}} labelId="demo-simple-select-label" id="demo-simple-select" label="Pakistan">
            <MenuItem value={10}>Azad Kashmir, Pakistan</MenuItem>
            <MenuItem value={20}>Balochistan, Pakistan</MenuItem>
            <MenuItem value={30}>Islamabad Capital Territory</MenuItem>
            <MenuItem value={40}>Khyber Pakhtunkhwa, Pakistan</MenuItem>
            <MenuItem value={50}>Northern Areas, Pakistan</MenuItem>
            <MenuItem value={60}>Punjab, Pakistan</MenuItem>
            <MenuItem value={70}>Sindh, Pakistan</MenuItem>
          </Select>
        </FormControl>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Find Cars, Mobile Phones and more..."
          inputProps={{ 'aria-label': 'search google maps' }} style={{backgroundColor: "white"}}/>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon style={{fontSize: "34px" , color: "darkgrey"}}/>
        </IconButton>
        <Link to="/ad-area" style={{textDecoration: "none" , fontSize: "30px" , float: "right" , marginRight: "35px"}}>
          <DriveFolderUploadOutlinedIcon style={{marginLeft: "25px" , fontSize: "35px"}}/>Post
        </Link>
      </div>
      <div className="image">
        <img src={logo2} alt="cover"/>
      </div>
      <div className="ads">
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={6}>
            {data && Object.entries(data).map(item => (
            <Grid item xs={4}>
              <Item style={{border: "1px solid darkgrey" , boxShadow: "5px 10px 8px #888888"}}>
                <Card key={item} style={{border: "2px solid lightgrey"}}>
                  <Card.Img variant="top" src={item[1].photos[4]}/>
                    <Card.Body>
                      <Card.Title style={{textAlign: "center"}}>Product 1</Card.Title>
                      <Card.Text style={{textAlign: "center" , fontSize: "20px"}}>
                        {item[1].description}
                      </Card.Text>
                      <Card.Text style={{textAlign: "center" , fontSize: "15px"}}>
                        {item[1].price}
                      </Card.Text>
                      <Link to='/view-product/' state={{ product: item[1], productId: item[0] }}>
                        <Button variant="outline-primary">View Product</Button></Link>
                        <Button variant="primary" style={{ float: "right", width: "100px" }}>Buy Now</Button>
                    </Card.Body>
                </Card>
              </Item>
            </Grid>
            ))}
          </Grid>
        </Box>
      </div><br/>
      <div className="footer">
        <div className="heading">
          <ul>
            <li>POPULAR CATEGORIES</li>
            <li>TRENDING SEARCHES</li>
            <li>ABOUT US</li>
            <li>OLX</li>
            <li>FOLLOW US</li>
          </ul>
        </div>
        <div className="categories">
          <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="searches">
        <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="about">
        <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="olx"><ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul></div>
        <div className="follow">
          <FontAwesomeIcon icon={faFacebookSquare} className="facebook"/>
          <FontAwesomeIcon icon={faTwitterSquare} className="twitter"/>
          <FontAwesomeIcon icon={faYoutubeSquare} className="youtube"/>
          <FontAwesomeIcon icon={faInstagramSquare} className="instagram"/>
        </div>
      </div>
    </>
  );
}

export default Home;