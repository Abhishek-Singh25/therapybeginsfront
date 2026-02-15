import React from "react";
import { useState } from "react";
import axios from "axios";

function Appform({onClose}){
    const [formdata,setFormdata]=useState({
        name:"",
        email:"",
        phone:"",
        date:"",
        time:"",
        message:""
    });
    function hc(e){
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }
    async function hs(e){
        e.preventDefault();
        try{
            const res=await axios.post('http://localhost:5000/appointments',formdata);
            alert(res.data.message);
            onClose();
        }catch(err){
            console.error(err);
            alert('Try Again');
        }
    };
    return<>
    <section className="appointment">
        <button className="closebtn" onClick={onClose}>X</button>
        <form onSubmit={hs}>
            <input type="text" name="name" placeholder="Enter your Name" value={formdata.name} onChange={hc} required/>
            <input type="email" name="email" placeholder="Enter your Email" value={formdata.email} onChange={hc} required/>
            <input type="number" name="phone" placeholder="Enter your Mobile no." value={formdata.phone} onChange={hc} required/>
            <input type="date" name="date" placeholder="Enter Date" value={formdata.date} onChange={hc} required/>
            <input type="time" name="time" placeholder="Enter Time" value={formdata.time} onChange={hc} required/>
            <textarea name="message" placeholder="Additional Details" value={formdata.message} onChange={hc}></textarea>
            <button type="submit">Submit</button>
        </form>
    </section>
    </>
}
export default Appform;