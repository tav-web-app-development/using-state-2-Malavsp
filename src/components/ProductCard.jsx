import { useState } from "react";

export default function ProductCard({ product, handleAddToCartClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <button
          disabled={currentImageIndex >= product.imageUrls.length - 1}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
        >
          Next
        </button>
        <button
          disabled={currentImageIndex <= 0}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
        >
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Hide " : "Show"} Description
      </button>
      <p>{showDescription ? product.description : ""}</p>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
