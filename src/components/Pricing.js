import './Pricing.css';

function Pricing() {
  const plans = [
    { name: "Starter", price: "$0", features: ["Basic Access", "Email Support"] },
    { name: "Pro", price: "$19/mo", features: ["All Features", "Priority Support"] },
    { name: "Enterprise", price: "$49/mo", features: ["Unlimited Users", "24/7 Support"] },
  ];

  return (
    <section className="pricing" id="pricing" data-aos="fade-up">
      <h2>Pricing Plans</h2>
      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <div className="plan-card" key={idx}>
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
