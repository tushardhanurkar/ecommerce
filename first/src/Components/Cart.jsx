import { useContext } from "react";
import { CartContext } from "../context/Cartcontxt";
import Footer from "./Footer";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="text-center mt-10 text-red-500">Your Cart is Empty</h2>;
  }

  return (
    <div>
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        {cart.map((item, index) => (
          <div 
            key={index} 
            className='border p-5 shadow-md rounded-lg w-80'
          >
            <img src={item.image} className="h-40 w-full object-contain" />

            <h2 className="font-bold mt-2">{item.name}</h2>
            <p>{item.specs}</p>
            <h3 className="font-bold mt-1 text-blue-600">{item.price}</h3>

            <button 
              className="bg-red-500 text-white p-2 rounded-lg mt-3"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

      </div>

      <button 
        className="bg-black text-white p-3 mt-7 rounded-lg"
        onClick={clearCart}
      >
        CLEAR CART
      </button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
