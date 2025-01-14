import React, { useRef, useState } from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1,
    }
  }
}

function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bjojngo', 'template_4s3lzeo', formRef.current, {
        publicKey: 'IAI0Do6SF_gmP991h',
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };
  
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Let's work together</motion.h1>
        <motion.div className="item">
          <h2>Mail</h2>
          <span>chriscimo2003@gmail.com</span>
        </motion.div>
        <motion.div className="item">
          <h2>Address</h2>
          <span>JIIT 62</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <span>+91 77619 10979</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder='Name' name="from_name" />
          <input type="email" required placeholder='Email' name="email" />
          <textarea rows={8} placeholder='Message' name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact;