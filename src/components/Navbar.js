import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">LaunchX</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#Pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#FAQ">FAQ</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
