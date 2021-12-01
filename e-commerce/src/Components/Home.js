import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Home(){
  return(
    <Box style={{justifyContent: "center", marginTop: "150px"}}
        sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 500, height: 300,}}}>
        <Paper elevation={6} style={{ border: "2px solid darkcyan"}}>
            <Typography variant="h2" style={{
                textAlign: "center", fontFamily: "sans-serif", color: "darkcyan",
                }}>WELCOME To <br/> My STORE
            </Typography>
            <Link to="signup">
                <Button variant="outlined" size="large" style={{
                    marginLeft: "200px", marginTop: "50px"}}>Sign Up
                </Button>
            </Link><br/>
            <Link to="login">
                <Button variant="outlined" size="large" style={{
                    width: "105px", marginLeft: "200px", marginTop: "10px"}}>Login
                </Button>
            </Link>
        </Paper>
    </Box>
  );
}

export default Home;