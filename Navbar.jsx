const Navbar = ({ cartCount }) => {
  return (
    <header className="navbar">
      <div className="logo">
        Yellow<span>Fork</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className="cart-icon">
          🛒 <span>{cartCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
