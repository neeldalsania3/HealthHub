export default function HEADER() {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          {" "}
          <i className="fas fa-heartbeat"></i> HealthHub{" "}
        </a>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#doctors">Doctors</a>
          <a href="#review">Review</a>
          <a href="/Login">Login</a>
          <a href="/Register">Register</a>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>
      </header>
    </>
  );
}
