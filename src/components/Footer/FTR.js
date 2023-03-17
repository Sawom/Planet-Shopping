import React from 'react';
import './FTR.css';
import logo from '../../images/logo.png';
import facebook from '../../images/fb.png';
import twitter from '../../images/twitter.png';
import insta from '../../images/insta.png';
import whatsapp from '../../images/whatsapp.png';
import auth from '../../Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const FTR = () => {
    const [user] = useAuthState(auth);
    return (
       <div >
        <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">
                         <div>
                            <span className='textClr' > User: {user?.displayName && user.displayName} </span> <br />
                            <span className='textClr' > User id: {user?.uid && user.uid}</span> <br /> <br />
                        </div>
                        <p className='textClr' ><img  height={110}  src={logo} alt="logo" /> Planet Shopping</p>
                        <p className='textClr' >We provide best product for you! Stay with us. </p>
                        <div className="hr"></div>
                        {/*  */}
                        <h6  > <span className='textClr' >102/3, Motijheel-Dhaka.</span> </h6>
                        <h6 className='textClr'  > <span >+01 2345 6789 12</span> <span>|</span> <span>+01 2345 6789 12</span> </h6>
                        <div className="contact-social">
                            <ul>
                                <li> <p><img  height={60}  src={facebook} alt="logo" /> </p></li>
                                <li> <p><img  height={60}  src={twitter} alt="logo" /> </p> </li>
                                <li> <p><img  height={60}  src={insta} alt="logo" /> </p> </li>
                                <li> <p><img  height={60}  src={whatsapp} alt="logo" /> </p> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p className='textClr' >Copyright &copy; 2023,  All Rights Reserved.</p>
    </footer>
       </div>

    );
};

export default FTR;