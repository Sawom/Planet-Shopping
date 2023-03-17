import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import SocialAccount from '../SocialAccount/SocialAccount';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';


const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [ sending, error] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, loading] = useSignInWithEmailAndPassword(auth);
    const[user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePass = (event) =>{
        setPassword(event.target.value);
    }
    const handleLogin = (event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    // navigate
    if(user){
       console.log('user', user);
         navigate('/home');
   }
    // reset password
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(auth, email)
            .then(result =>{})
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div >
            <br /><br />
            <h2 className='app' >Login here</h2>
            <div className='center container'>  
             
            <Form onSubmit={handleLogin}>
                {/* email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <br />
                     <Form.Label>Email address</Form.Label>
                    <Form.Control required  onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {/* password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required  onBlur={handlePass} type="password" placeholder="Password" />
                </Form.Group>
               
                {/* submit */}
                <Button size='sm' variant="primary" type="submit">
                        Login
                </Button>
                <br /> 
                <p>New to Ema-Jhon? <Link as={Link} className='txt' to="/signup">Signup Here</Link>  </p>
                <p style={{color:"red"}}>{error?.message}</p>
                <br />
                <SocialAccount></SocialAccount>
                {/*  */}
                 <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'
             onClick={resetPassword}>Reset Password</button> </p>
              <ToastContainer />
            </Form>
            </div>
            <br />
        </div>
    );
};

export default Login;