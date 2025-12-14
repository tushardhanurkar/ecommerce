import { useContext } from "react";
import { CartContext } from "../context/Cartcontxt";
import Footer from "./Footer";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-center text-red-500 text-lg sm:text-xl">
          Your Cart is Empty
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">

      <div className="p-4 sm:p-6 flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-4
          w-full
          max-w-7xl
        ">
          {cart.map((item, index) => (
            <div
              key={index}
              className="
                 border border-gray-300  rounded-xl
                p-4
                shadow-sm
                flex flex-col
              "
            >
              <img
                src={item.image}
                className="h-32 sm:h-40 w-full object-contain"
                alt={item.name}
              />

              <h2 className="font-semibold mt-2 text-sm sm:text-base">
                {item.name}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600">
                {item.specs}
              </p>

              <h3 className="font-bold mt-1 text-blue-600 text-sm sm:text-lg">
                {item.price}
              </h3>

              <button
                className="
                  bg-red-500
                  text-white
                  px-3 py-2
                  rounded-lg
                  mt-3
                  text-sm sm:text-base
                "
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Clear Cart */}
        <button
          className="
            bg-black
            text-white
            px-6 py-3
            mt-8
            rounded-lg
            text-sm sm:text-base
          "
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
