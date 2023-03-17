import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState,useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import SocialAccount from '../SocialAccount/SocialAccount';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmpassword , setConfirmpassword] = useState('');
    const navigate = useNavigate();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    
    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }
    const handleConfirmpassword = (event)=>{
        setConfirmpassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
            console.log(result)
        })
    }

    const handleCreateUser = async (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        if(password !== confirmpassword){
            setError("Your password did not match! ");
            return;
        }
        if(password.length < 6){
            setError("password must be 6 character longer. ");
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        verifyEmail();
        console.log('Updated Profile');
        navigate('/home');
    }

    return (
        <div>
            <br /><br />
            <h2 className='app' >Signup here</h2>
            <div className='center container'>  
            <Form onSubmit={handleCreateUser} >
                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <br />
                        <Form.Label>Name</Form.Label>
                        <Form.Control   type="text" placeholder="Enter name" />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                    <Form.Control required  onBlur={handleEmail} name="email"  type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required  onBlur={handlePassword} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required  onBlur={handleConfirmpassword }  name="confirm-password"  type="password" placeholder="Confirm Password" />
                </Form.Group>
                <p style={{color: "red"}} >{error}</p>
                <Button size='sm' variant="primary" type="submit">
                        Signup
                </Button>
                <br /> <br />
                <p className='text-danger' > {error} </p> 
                <p>Already have an account? <Link className='txt' to="/login">Login Here</Link></p>
                <br />
                <SocialAccount></SocialAccount>
            </Form>
            </div>
            <br />
        </div>
    );
};

export default Signup;