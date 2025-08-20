import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll reach out soon.");
    setEmail('');
    setMsg('');
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea 
          placeholder="Your Message" 
          required 
          value={msg} 
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
