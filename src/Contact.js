import React from 'react'
import './Contact.css'
function Contact() {
    return(
        <div className="contact-container">  
  <form id="contact" action method="post">
    <h3>Contact Me</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabIndex={2} required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabIndex={3} required />
    </fieldset>
      <fieldset>
      <textarea placeholder="Type your message here...." tabIndex={5} required defaultValue={""} />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

    )
}

export default Contact;
