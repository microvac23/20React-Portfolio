import React, {useState} from 'react';

export default function Contact() {
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [userMessageColor, setUserMessageColor] = useState('red')

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'name') {
      setFormName(value);
    } if (name === 'email') {
      setFormEmail(value);
    } if (name === 'message') {
      setFormMessage(value);
    } 
  }
  
  
  const handleFormSubmit = () => {
    if(formName === '') {
      setUserMessage('Your name is missing')
      setTimeout(() => { setUserMessage('') }, 5000);
      return
    } if(formEmail === '') {
      setUserMessage('Your email is missing')
      setTimeout(() => { setUserMessage('') }, 5000);
      return
    } if(formMessage === '') {
      setUserMessage('Your message is missing')
      setTimeout(() => { setUserMessage('') }, 5000);
      return
    } if (formName && formEmail && formMessage) {
    setUserMessageColor('black')
    setUserMessage('Message sent! Thank you!')
    setFormName('')
    setFormEmail('')
    setFormMessage('')
    setTimeout(() => { setUserMessage('') }, 5000);
      return
    }
  }

  return (
    <div>
    <h1 style={{textAlign:'center'}}>Contact Me</h1>
<form  onSubmit={handleFormSubmit}>
  <div style={{textAlign:'center'}}>
    <input type="text" value={formName} name='name' placeholder="Name" onChange={handleChange} ></input>
  </div>
  <div style={{textAlign:'center'}}>
  <input type="email" value={formEmail} name='email' placeholder="Email address" onChange={handleChange}></input>
  </div>
  <div style={{textAlign:'center'}}>
    <textarea name="message" type="text" value={formMessage} placeholder="Message" onChange={handleChange}></textarea>
  </div >
  <div style={{textAlign:'center'}}>
  {userMessage && <div style={{userMessageColor}}>{userMessage}</div>}  
  <input type="submit" value="Submit" id="input-submit" ></input>
  </div>
</form>
</div>
  );
}
