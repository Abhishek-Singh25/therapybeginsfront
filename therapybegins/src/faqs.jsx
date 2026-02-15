import React from "react";
import { useState } from "react";
import './faqs.css'

const faqs=[
    {
        que: "Do you take insurance ?",
        ans: "Yes, we accept most major insurance providers. Please contact to confirm you coverage."
    },
    {
        que: "What are your rates ?",
        ans: "Our rates vary depending on the service. Please reach out for detailed pricing information."
    },
    {
        que: "Do you have any openings ?",
        ans: "Yes, we currently have openings. Contact us to schedule an appointment."
    }
];
function FAQ(){
    const [open,setOpen]=useState(null);

    return<>
    <div className="picc">
        <div className="faqleft">
            <img src="/medi.png" alt="Meditation Pic" width='300'/>
        </div>
        <div className="faq">
            <h2 className="multique">FAQs</h2>
            {faqs.map((item,i)=>(
                <div key={i} className="faq-item">
                    <div className="faq-que" onClick={()=>setOpen(open===i?null:i)}>
                        <span>{item.que}</span>
                        <span>{open===i?"-":"+"}</span>
                    </div>
                    <div className={`faq-ans ${open===i?"show":""}`}>
                        {item.ans}
                    </div>
                </div>
            ))}
        </div>
        </div>
    </>
}
export default FAQ;