import './FAQ.css';
import { useState } from 'react';

function FAQ() {
  const faqs = [
    { q: "What is LaunchX?", a: "It's a productivity platform." },
    { q: "Is there a free version?", a: "Yes, we have a free plan." },
    { q: "Can I cancel anytime?", a: "Yes, cancel anytime with one click." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div key={idx} className="faq-item">
            <h4 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
              {item.q}
            </h4>
            {openIndex === idx && <p>{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
