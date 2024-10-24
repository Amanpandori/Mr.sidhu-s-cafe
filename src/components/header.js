import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaRegRegistered } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import './Header.css';
import './register.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For the burger menu
  const [isVisible, setIsVisible] = useState(false); // To control the visibility of the register form
  const [isShow, setIsShow] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [submitted, setSubmitted] = useState(false); // To check if the form is submitted

  // Toggle the burger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Registration successful!', formData);
    setSubmitted(true);
  };
   
  const loginClick = () =>{
    setIsShow(true)
    setIsVisible(false)

  }

  // ---------------------------------------------------------------------
         // State variables for form inputs
        //  const [formData1, setFormData1] = useState({
        //   email: '',
        //   password: '',
        // });
      
        // const [submitted1, setSubmitted1] = useState(false);
      
        // Handle input change
        const handleChange1 = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };
      
        // Handle form submission
        const handleSubmit1 = (e) => {
          e.preventDefault();
          if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
          }
      
          // Here you would typically send the formData to a server
          console.log('Login successful!', formData);
          setSubmitted(true);
        };
      
        if (submitted) {
            alert("Thank you for Login"+" "+ formData.username)
          return;
        }
      
        


  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-burger" onClick={toggleMenu}>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/menu" className="navbar-link">Menu</Link>
          <Link to="/showorders" className="navbar-link">Show Orders</Link>
        </div>
      </div>
      <div className="navbar-center">
        <span className="navbar-title">Aman Sidhu</span>
      </div>
      <div className="navbar-right">
        <Button variant="primary" onClick={()=>setIsVisible(true)} className="navbar-link">
          <FaRegRegistered className='icon_align' />Register
        </Button>
        <Link to="/contact" className="navbar-link">
          <Button variant="primary">
            <RiLogoutCircleLine className='icon_align' />Logout
          </Button>
        </Link>
        <Link to="/contact" className="navbar-link">
          <Button variant="primary">
            <FaCartArrowDown className='icon_align' />Shopping Cart
          </Button>
        </Link>
      </div>

      {/* Register Form */}
      {isVisible &&
        <form onSubmit={handleSubmit} className='register_form'>
        <h2 className='register_heading' style={{display: "inline"}}>Register</h2>
        <button style={{
              position: "relative",
              top: "-13px",
              left: "148px",
              background: "none",
              color: "white",
              margin: "0px",
              fontSize: "15px",
          
        }} type="button" onClick={()=>setIsVisible(false)}>X</button>


        {/* Username Input */}
        <div className='form_input_box'>
          <label htmlFor="username">Username:</label>
          <input
            className='register_input'
            type="text"
            placeholder='Username'
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className='form_input_box'>
          <label htmlFor="email">Email:</label>
          <input
            className='register_input'
            type="email"
            placeholder='Email'
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className='form_input_box'>
          <label htmlFor="password">Password:</label>
          <input
            className='register_input'
            type="password"
            placeholder='Password'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div className='form_input_box'>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className='register_input'
            type="password"
            placeholder='Confirm Password'
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Register and Login Buttons */}
        <div className='register_buttons'>
          <Button variant="primary" type='submit'>Register</Button>
          <Button variant="primary" type='button' onClick={loginClick}>Login</Button>
        </div>
      </form>}

      {/* Conditional Success Message */}
      {submitted && <div className="success-message">Thank you for registering, {formData.username}!</div>};
{/* ----------------------------------------------------------------------------------------------------------------------- */}
     { isShow &&
      <form onSubmit={handleSubmit1} className='register_form login'>
      <h2 className='register_heading'>Login</h2>
      <button style={{
              position: "relative",
              top: "-49px",
              left: "270px",
              background: "none",
              color: "white",
              margin: "0px",
              fontSize: "15px",
          
        }} type="button" onClick={()=>setIsShow(false)}>X</button>

        {/* Email Input */}
        <div className='form_input_box'>
          <label htmlFor="email">Email:</label>
          <input className='register_input'
            type="email"
            placeholder='Email'
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange1}
            required
          />
        </div>

        {/* Password Input */}
        <div className='form_input_box'>
          <label htmlFor="password">Password:</label>
          <input className='register_input'
            type="password"
            placeholder='Password'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange1}
            required
          />
        </div>

        <div className='register_buttons'>
        <Button variant="primary" type='submit'>Login</Button>
        </div>
        
      </form>}
    </div>
  );
};

export default Header;
