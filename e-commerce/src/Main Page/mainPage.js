import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function MainPage(){
  return(
    <Box className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} 
        sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 500, height: 325}}}>
        <div className="w-100" style={{maxWidth: "475px"}}>
            <Paper elevation={6} style={{ border: "2px solid darkcyan"}}>
                <Typography variant="h2" style={{
                    textAlign: "center", fontFamily: "sans-serif", color: "darkcyan",
                    }}>WELCOME To <br/> My STORE
                </Typography>
                <Link to="signup">
                    <Button variant="outlined" size="large" style={{
                        marginLeft: "175px", marginTop: "50px"}}>Sign Up
                    </Button>
                </Link><br/>
                <Link to="login">
                    <Button variant="outlined" size="large" style={{
                        width: "105px", marginLeft: "175px", marginTop: "10px"}}>Login
                    </Button>
                </Link>
            </Paper>
        </div>
    </Box>
  );
}

export default MainPage;