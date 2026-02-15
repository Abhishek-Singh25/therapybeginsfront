import React, { useState } from 'react'
import './App.css'
import Appform from './appform.jsx'
import FAQ from './faqs.jsx'
import Pbackground from './pb.jsx'
import Contact from './contact.jsx'

function Hero(){
  return(
    <section className='hero'>
      <h1>Your Journey to Inner Peace Starts Here</h1>
      <h2>Therapy for adults in Santa Monica, CA</h2>
      </section>
  )
}
function Special(){
  return(
    <section className='container'>
      <h2>Services</h2>
      <div className='mainsp'>
      <div className="sp">
        <h3>Anxiety</h3>
        <p>Anxiety can feel like constant worry, racing thoughts, or tension in your body. Together, we will explore practical tools and deeper insights to help calmer and more in control</p>
      </div>
      <div className="sp">
        <h3>Panic</h3>
        <p>Panic attacks can be overwhelming and frightening. I will support you with evidence based strategies to reduce their intensity and frequency, so you can regain confidence in your daily life</p>
      </div>
      <div className="sp">
        <h3>Trauma</h3>
        <p>Trauma can leave lasting effects on your sense of safety and relationships. Through a paced and supportive approach, we will work on healing and building resilience so you feel more grounded and secure</p>
      </div>
      </div>
    </section>
  )
}
function About(){
  return<>
    <img src='/profile pic1.png' alt='Profile Pic' width='200' style={{display:'block', margin:'0 auto'}}/>
    <section className='acontainer'>
      <h2>Hi, I'm Dr. Maya Reynolds, PsyD</h2>
      <p>I'm licensed clinical psychologist based in Santa Monica, California.<br/>I offer therapy for adults who feel overwhelmed by anxiety, stress, or past experiences.<br/>My approach is warm, collaborative, and grounded-integration CBT, EMDR, mindfulness, and body-oriented techniques.</p>
      <p><span style={{fontWeight:'bold'}}>Office:</span> 123th Street 45 W, Santa Monica, CA 90401</p>
      <p style={{marginBottom:'1rem'}}>Hours: Monday-Friday, 10:00-18:00</p>
      <img src='/office pic.png' alt='Office Pic' width='270'/>     <img src='/office pic1.png' alt='Office Pic' width='270'/>
    </section>
    </>
}
function CTA(){
  return(
    <section className='cta'>
      <h2>Get started today</h2>
      <p>Ready to make the first step towards a happier, healthier you ?<br/>Contact me to book your first session. I look forward to starting this therapeutic journey with you</p>
    </section>
  )
}
function Footer(){
  const year=new Date().getFullYear();
  return(
    <footer className='footer'>
        <p>&copy; {year} Dr. Maya Reynolds. All rights reserved.</p>
        <p>Website developed by Abhishek Singh</p>
        <p>Email: <a href='mailto:sabhishek52@yahoo.com'>sabhishek52@yahoo.com</a></p>
        <p>Contact: <a href='tel:+919062047725'>+91 9062047725</a></p>
    </footer>
  )
}

function App() {
  const [show,setShow]=useState(false);
  return(
    <>
    <Contact/>
    <Hero/>
    <Special/>
    <About/>
    <CTA/>
    <div style={{textAlign:'center',marginBottom:'7rem', fontSize:'1.5rem'}}>
      <button style={{border:'1px solid gray'}} onClick={()=>setShow(true)}>Book Appointment</button>
    </div>
    {show && (
      <div className='modal-overlay'>
        <div className="modal-content"><Appform onClose={()=>setShow(false)}/></div>
      </div>
    )}
    <FAQ/>
    <Pbackground/>
    <Footer/>
    </>
  )
}

export default App
