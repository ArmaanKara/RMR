import React from 'react'
import {Button} from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container' >
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Sign up to leave a review and see what others are saying about
                    the residences!
                </p>
                <p className='footer-subscription-text' id="footerForContact">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/contactus'> How it works</Link>
                        <Link to='/'>Terms of Service</Link>
                        <Link to='/'>UBC Residences</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                        RMR <i className='fas fa-hotel' />
                        </Link>
                    </div>
                    <p className='website-rights'>RMR Copyright &copy; 2021</p>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='/facebook.com'
                            target='_blank'
                            aria-label='Facebook'
                            >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                            to='/instagram.com'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to='/twitter.com'
                            target='_blank'
                            aria-label='LinkedIn'
                            >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
