import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <img 
      src="https://dentalist.netlify.app/static/media/logo.9cb018fc8926bbe6ba83.png"
      alt="Logo"
      width={150}
      />
    </div>
    <div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/service">Service</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    </div>
    <div>
      <button className='nav-button'>Book Appointment</button>
    </div>
  </nav>
  )
}

export default Navbar