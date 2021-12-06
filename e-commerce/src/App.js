import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Main Page/mainPage';
import Login from './Main Page/Login';
import SignUp from './Main Page/SignUp';
import { AuthProvider } from './Context/AuthContext';

function App(){
  return(
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "475px"}}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="" element={<MainPage/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<SignUp/>}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;