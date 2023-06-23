import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="product_d">
      <h2>{state.title}</h2>
    </div>
  );
}

export default ProductDetails;
