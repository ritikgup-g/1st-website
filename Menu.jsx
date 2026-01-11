import { useState } from "react";

const menuData = [
  {name:"Classic Burger",price:149,img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
  {name:"Cheese Pizza",price:249,img:"/download.jpg"},
  {name:"White Sauce Pasta",price:199,img:"/download (1).jpg"},
  {name:"French Fries",price:99,img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877"},
  {name:"Veg Sandwich",price:129,img:"/download3.jpeg"},
  {name:"Paneer Wrap",price:179,img:"/download 5.jpeg"},
  {name:"Veg Biryani",price:219,img:"/download 7.jpg"},
  {name:"Veg Thali",price:199,img:"/download 4.jpeg"},
  {name:"Filter Coffee",price:99,img:"https://images.unsplash.com/photo-1511920170033-f8396924c348"},
  {name:"Chocolate Shake",price:129,img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699"},
  {name:"Ice Cream",price:89,img:"/download 6.jpeg"},
  {name:"Brownie",price:149,img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c"}
];

const Menu = ({ addToCart }) => {
  const [visible, setVisible] = useState(6);

  return (
    <section id="menu" className="section section-light">
      <h2 className="section-title">Our Specialities</h2>

      <div className="menu-grid">
        {menuData.slice(0, visible).map((item, i) => (
          <div className="menu-card" key={i}>
            <img src={item.img} alt={item.name} />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {visible < menuData.length && (
        <button
          className="btn-outline"
          onClick={() => setVisible(menuData.length)}
        >
          Load Full Menu
        </button>
      )}
    </section>
  );
};

export default Menu;
