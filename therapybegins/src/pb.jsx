import React from "react";
import { useState } from "react";

function Pbackground(){
    const [hide,setHide]=useState(false);
    return<>
    <button onClick={()=>setHide(!hide)} style={{margin:'25px 0 30px 50%', border:'1px solid gray'}}>
        {hide?"Hide Dr. Maya Reynolds's Professional Background":"Show Dr. Maya Reynolds's Professional Background"}
    </button>
    <div style={{display:hide?"block":"none", margin:'15px 0 30px 50%'}}>

        <h3>Education</h3>
        <ul>
            <li>PsyD in Clinical Psychology-UCLA</li>
            <li>MA in Psychology-Stanford University</li>
            <li>BA in Psychology-UC Berkeley</li>
        </ul>
        <h3>Licensure</h3>
        <ul>
            <li>Licensed Clinical Psychologist, California Board of Psychology</li>
            <li>License Number: CA-14752</li>
        </ul>
        <h3>Certifications</h3>
        <ul>
            <li>EMDR Certified Therapist</li>
            <li>Advanced CBT Training</li>
            <li>Trauma-Focused Therapy Certification</li>
            <li>Mindfulness-Based Stress Reduction</li>
        </ul>
    </div>
    </>
}
export default Pbackground;