import { useState } from "react";
import Form from "./Form";
export default function NavBar({ user = false, itemsInCart }) {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <span>
        {user && user.itemsInCart !== 0 && `${user.itemsInCart} in your cart`}
      </span>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      <div>{itemsInCart} items in Cart</div>
      <button onClick={handleShowForm}>Checkout</button>
      {showForm && <Form />}
    </>
  );
}
