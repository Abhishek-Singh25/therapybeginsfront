import { useState } from "react";
import './contact.css';

function Contact(){
    const [open,setOpen]=useState(false);
    return<>
    <div className="modal-demo">
        <button className="openb" onClick={()=>setOpen(true)}>
            Contact Us
        </button>
        {open && (
            <div className="mo">
                <div className="mc">
                    <p>Dr. Maya Reynolds, PsyD</p>
                    <p>123th Street 45 W, Santa Monica, CA 90401</p>
                    <p>email@example.com | (555) 555-5555</p>
                    <p>Hours: Monday-Friday, 10:00-18:00</p>
                    <button onClick={()=>setOpen(false)} className="closebt">Close</button>
                </div>
            </div>
        )}
    </div>
    </>
}
export default Contact;