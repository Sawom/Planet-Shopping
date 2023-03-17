import React from 'react';
// path

import Google from '../../images/google.png';
import Git from '../../images/git.png';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import UseFirebase from '../../hooks/UseFirebase';
import auth from '../../Firebase/Firebase';

const SocialAccount = () => {
    const {googleSignIn,githubSignIn} = UseFirebase();
    const[user] = useAuthState(auth);
    const navigate = useNavigate();
    // google sign in
    const handleGoogle = () =>{
        googleSignIn();
    }
     // github sign in
    const handleGithub = ()=>{
        githubSignIn();
    }
    // navigate
    if(user){
       console.log('user', user);
         navigate('/home');
   }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {/* buttons */}
            <div>
                {/* google button */}
                <Button onClick={handleGoogle} variant="primary" size="lg">
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </Button> <br /> <br />
                <Button onClick={handleGithub} variant="primary" size="lg">
                    <img style={{ width: '30px' }} src={Git} alt="" />
                    <span className='px-2'>Git Hub Sign In</span>
                </Button>
                <br /> <br />
            </div>
        </div>
    );
};

export default SocialAccount;