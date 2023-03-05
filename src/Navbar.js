const Navbar = (props) => {
  const itemsCtr = props.items;

  return (
    <div>
      <nav>
        <a href="/">HOME</a>|<a href="/cart">CART {`(${itemsCtr})`}</a>
      </nav>
    </div>
  );
};

export default Navbar;
