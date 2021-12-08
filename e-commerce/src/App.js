import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Main Page/mainPage';
import Login from './Main Page/Login';
import SignUp from './Main Page/SignUp';
import { AuthProvider } from './Context/AuthContext';
import Home from './Home Page/Home';
import Ad from './Ad Area/ad';

function App(){
  return(
    <Container>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="" element={<MainPage/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<SignUp/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="ad-area" element={<Ad/>}/>
            </Routes>
          </AuthProvider>
        </Router>
    </Container>
  );
}

export default App;