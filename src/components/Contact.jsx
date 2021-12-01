import React, { useState } from "react";

import "./style/Contact.css";
import emailjs from "emailjs-com";


function Contact() {
  const [data, setData] = useState(
    {
      Name:'',
      Email:'',
      Message:'',
      
    }
  );
    
 

  function handleChange(e) {
    const newdata = { ...data };
    console.log(newdata);
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function handleSubmit(e){
  if(data.Name!==''&& data.Email!=='' && data.Message!==''){
    e.preventDefault()

     emailjs
      .sendForm(
      'service_fe0vegl',
       'template_w4hyoo2',
        e.target,
         'user_k2Y7xjpEMlaUopI3gv4ts'
      )
      .then((res) => {
        console.log(res);
      })
       .catch((err) => console.log(err));
    }
    else{
      console.log("Fill all the values in text field")
    }
      // alert("Thanks for sending message, Will get back to you soon")
      // e.target.reset();
     
  }


  const handleReset=()=>{

setData({
  Name:'',
  Email:'',
  Message:'',

})

  }
  return (
    <div>
      <br />
      <article class="flex flex-col justify-center px-6 py-12">

    
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          {""}
          {""}

          <label>Name</label>
          <input
            name="Name"
            value={data.Name}
            className="input-control"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Your Name..."
            required
          />

          {/* <label className="right-inline">Last Name</label>
  <input   className="input-control" /> */}
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input
            name="Email"
            type="email"
            value={data.Email}
            placeholder="Enter Your Mail..."
            className="input-control"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="Message"
            value={data.Message}
            className="input-control"
            placeholder="Enter Your Message..."
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>&nbsp;</label>
           <button type="submit" value="Submit" className="contact-button" >Send</button> 
           <button onClick={handleReset} className="contact-reset" >Reset</button> 
          {/* <input type="submit" value="Submit" /> */}
        </div>
        </form>
      </article>
    
  


    </div>
  );
}

export default Contact;
