import React, {useState} from 'react';

export default function Contact() {
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setFormName(value);
    } if (name === 'email') {
      setFormEmail(value);
    } if (name === 'message') {
      setFormMessage(value);
    }
  }
  
  const handleFormSubmit = () => {
    
  }

  return (
    <div>
    <h1>Contact Me</h1>
<form className="cf">
  <div className="half left cf">
    <input type="text" value={formName} name='name' placeholder="Name" onChange={handleChange}></input>
  </div>
  <div>
  <input type="email" value={formEmail} name='email' placeholder="Email address" onChange={handleChange}></input>
  </div>
  <div className="half right cf">
    <textarea name="message" type="text" value={formMessage} placeholder="Message" onChange={handleChange}></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit"></input>
</form>
</div>
  );
}
