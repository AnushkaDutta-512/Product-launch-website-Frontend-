import './Features.css';

function Features() {
  const features = [
    "Smart Task Management",
    "AI-Powered Insights",
    "User Friendly Interface",
    "24/7 Support"
  ];

  return (
    <section className="features" id="features" data-aos="fade-up">
      <h2>Features</h2>
      <div className="feature-grid">
        {features.map((f, idx) => (
          <div className="feature-card" key={idx}>
            <h3>{f}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
