import React, { useRef, useState } from 'react';
import { Card ,Form, Button, Alert } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value , passwordRef.current.value);
            navigate('/home');
        }catch{
            setError("No Account Found!")
        }
        setLoading(false);
    }
    return (
        <div className="w-100" style={{maxWidth: "475px" , marginTop: "115px" , marginLeft: "325px"}}>
            <Card className="d-flex justify-content-center">
                <Card.Body>
                <h1 className="text-center mb-4">Log In</h1>
                    {error && <Alert variant="danger">{error}</Alert>} 
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group><br/>
                        <Button className="w-100" type="submit" disabled={loading}>Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        Need An Account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;
