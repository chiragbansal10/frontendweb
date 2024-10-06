import React, { useState } from 'react';
import '../CSS/styles.css';
import heroImage from './scott-graham-5fNmWej4tAA-unsplash 1.png';
import sean from './sean-pollock-PhYq704ffdA-unsplash 1.png';
import sed from './backlit-bonding-casual-708392-400x400 1.png';
import bussiness from './businessman-4608282_1920 1.png';
import hands from './hands-1063442_1280 1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  import { faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
function Script() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    });
    
    const [formErrors, setFormErrors] = useState({});
    
    
    const validateForm = () => {
        const errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone number is invalid';
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <header className="header">
                <div className="header-left">
                <div className="logo-boxupper">
                    <div className="small-boxupper"></div>
                    <div className="small-boxupper1"></div>
                    <div className="small-boxupper2"></div>
                    <div className="small-boxupper3"></div>
                   
                </div>
                    <div className="logo">Logo</div>
                   
                </div>
                <nav className="navigation">
                    <a href="#" className="nav-link">Features</a>
                    <a href="#" className="nav-link">Pricing</a>
                    <a href="#" className="nav-link">Community</a>
                    <a href="#" className="nav-link support">Support</a>
                </nav>
                <div className="header-right">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Register</button>
                </div>
            </header>
            <main>
                <section className="hero-section">
                   
                    <img src={heroImage} alt="People working on laptops and documents" className="hero-image"/>
                    <div className="hero-overlay">
                        <h1 className="hero-title">The largest community of photo enthusiasts</h1>
                        <button className="join-btn">Join Today</button>
                    </div>
                </section>
                
                <div className="container">
           
            <h1 className="title">Snap photos and share like never before</h1>
            <div className="grid-container">
                <div className="card">
                    <h2 className='cardtitle'>Sed ut perspiciatis</h2>
                    <p className="highlight custom-border">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                    </p>
                    <button className="button">Learn more</button>
                </div>
                <div className="card">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                    <button className="button">Learn more</button>
                </div>
                <div className="card">
                    <h2>Nemo enim ipsam</h2>
                    <p>
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </p>
                    <button className="button">Learn more</button>
                </div>
                <div className="card">
                    <h2>Tempor incididunt</h2>
                    <p>
                        Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                    </p>
                    <button className="button">Learn more</button>
                </div>
            </div>
        </div>
                <div className="container">
            <div className="headermedia">
                <h1>Have you ever posted any photo on social media?</h1>
                
                 <p className='headermediapara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="content">
                <div className="text-content">
                    <div className="text-box">
                        <h2>Sed ut perspiciatis</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                    </div>
                    <div className="text-box green-border">
                        <h2>Lorem ipsum dolor</h2>
                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="text-box pink-border">
                        <h2>Nemo enim ipsam</h2>
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={sean} alt="Skyscrapers viewed from below with a blue sky background"/>
                </div>
            </div>
        </div>
            </main>
            <div className="container">
            <h1 className="title">Make your photos more stylish</h1>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <div className="grid">
                <div className="cardlay">
                    <img src={sed} alt="A hand pointing at a laptop screen with a website open" className="image"/>
                    <h2 className="card-title">Sed ut perspiciatis</h2>
                    <p className="card-description">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                </div>
                <div className="cardlay">
                    <img src={bussiness} alt="A person in a suit holding a tablet with a network diagram overlay" className="image"/>
                    <h2 className="card-title">Lorem ipsum dolor</h2>
                    <p className="card-description">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="cardlay">
                    <img src={hands} alt="Two hands shaking with a cityscape background" className="image"/>
                    <h2 className="card-title">Nemo enim ipsam</h2>
                    <p className="card-description">Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </div>
        </div>
        <div className="signup-container">
            <h1 className="signup-title">Ready to take a free trial?</h1>
            <p className="signup-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <div className="signup-form-container">
                <h2 className="signup-subtitle">Sign up for a free account</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                    <div className='errorinput'>
                        <input type="text" placeholder="First name" className="input-field"  onChange={handleChange} value={formData.firstName}/>
                        {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
                        </div>
                        <div className='errorinput'>  
                        <input type="text" placeholder="Last name" className="input-field"  onChange={handleChange} value={formData.lastName}/>
                        {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
                    </div></div>
                    <div className="input-group">
                    <div>
                        <input type="email" placeholder="Email address" className="input-field"  onChange={handleChange} value={formData.email}/>
                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                        </div>
                        <div>                        <input type="text" placeholder="Phone Number" className="input-field"  onChange={handleChange} value={formData.phone}/>
                        {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                    </div> </div>
                    
                    <input type="password" placeholder="Create password" className="input-field"  onChange={handleChange} value={formData.password}/>
                     {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                    <button type="submit" className="signup-button">Register</button>
                </form>
            </div>
        </div>
        
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-container">
                <div className="logo-box">
                    <div className="small-box"></div>
                    <div className="small-box1"></div>
                    <div className="small-box2"></div>
                </div>
                <div className='logofotter'>Logo</div>
            </div>
                <div className="footer-links">
                    <div>
                        <h3 className="link-title">Mobile app</h3>
                        <ul>
                            <li className='feature'>Features</li>
                            <li className='feature'>Live share</li>
                            <li className='feature'>Video record</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="link-title">Community</h3>
                        <ul>
                            <li className='feature'>Featured artists</li>
                            <li className='feature'>The Portal</li>
                            <li className='feature'>Live events</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="link-title">Company</h3>
                        <ul>
                            <li className='feature'>About us</li>
                            <li className='feature'>Contact us</li>
                            <li className='feature'>History</li>
                        </ul>
                    </div>
                </div>
                <div className="auth-buttons">
                    <button className="register-button">Register</button>
                    <button className="login-button">Log in</button>
                </div>
            </div>
            <hr className="divider" />
            <div className="footer-bottom">
                <span>© Photo, Inc. 2019. We love our users!</span>
                
    
                <footer className="footer">
                <div className="footer-content">
                  <div className="left-menu">
                    
                    Follow us:
                  </div>
                  <div className="right-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                </div>
              </footer>
            </div>
        </footer>
        </div>
    );
}

export default Script;
