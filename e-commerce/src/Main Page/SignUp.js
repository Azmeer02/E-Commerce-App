import React, { useRef, useState } from 'react';
import { Card ,Form, Button, Alert } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function SignUp(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const passConfRef = useRef();
    const { signUp } = useAuth();
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passConfRef.current.value){
            return setError("Password Don't Match");
        }
        try{
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value , passwordRef.current.value);
            navigate('/')
        }catch{
            setError("Failed To Create An Account")
        }
        setLoading(false);
    }
    return (
        <>
            <Card>
                <Card.Body>
                <h1 className="text-center mb-4">Sign Up</h1>
                    {error && <Alert variant="danger">{error}</Alert>} 
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="pass-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passConfRef} required/>
                        </Form.Group><br/>
                        <Button className="w-100" type="submit" disabled={loading}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </>
    )
}

export default SignUp;
