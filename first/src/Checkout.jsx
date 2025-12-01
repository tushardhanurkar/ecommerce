import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    ram: "",
    color: "",
    storage: "",
    payment: "",
  });

    const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    const orderData = {
      ...formData,
      productName: product.name,
      price: product.price,
    };

    try {
      const res = await fetch("http://localhost:5000/placeorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg("Order failed! Please try again.");
        return;
      }

      setSuccessMsg("Order placed successfully!");

      setTimeout(() => navigate("/"), 2000);

    } catch (err) {
      setErrorMsg("Something went wrong! Try again.");
    }
  };

  if (!product) {
    return <h1 className="text-center text-xl mt-10">No product selected</h1>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* PRODUCT CARD */}
      <div className="border rounded-xl shadow-lg p-4 flex gap-4 mb-6">
        <img src={product.image} className="w-32 h-32 object-contain" />
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-gray-600">{product.brand}</p>
          <p className="text-xl font-bold mt-2">₹ {product.price}</p>
        </div>
      </div>

      {/* USER INPUTS */}
      <div className="grid grid-cols-1 gap-4 bg-white p-5 rounded-xl shadow mb-6">
        <input name="name" onChange={handleChange} placeholder="Your Name" className="border p-2 rounded" />
        <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
        <input name="phone" onChange={handleChange} placeholder="Phone" className="border p-2 rounded" />
        <textarea name="address" onChange={handleChange} placeholder="Full Address" className="border p-2 rounded" />
      </div>

      {/* OPTIONS */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">

        <p className="font-semibold mb-2">Select RAM:</p>
        <div className="flex gap-4">
          {["4GB", "6GB", "8GB"].map((r) => (
            <label key={r} className="flex items-center gap-2">
              <input type="radio" name="ram" value={r} onChange={handleChange} />
              {r}
            </label>
          ))}
        </div>

        <p className="font-semibold mt-4 mb-2">Select Color:</p>
        <div className="flex gap-4">
          {["Black", "Blue", "Green"].map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input type="radio" name="color" value={c} onChange={handleChange} />
              {c}
            </label>
          ))}
        </div>

        <p className="font-semibold mt-4 mb-2">Storage:</p>
        <div className="flex gap-4">
          {["64GB", "128GB", "256GB"].map((s) => (
            <label key={s} className="flex items-center gap-2">
              <input type="radio" name="storage" value={s} onChange={handleChange} />
              {s}
            </label>
          ))}
        </div>

        <p className="font-semibold mt-4 mb-2">Payment Method:</p>
        <div className="flex gap-4">
          {["COD", "EMI"].map((p) => (
            <label key={p} className="flex items-center gap-2">
              <input type="radio" name="payment" value={p} onChange={handleChange} />
              {p}
            </label>
          ))}
        </div>

      </div>

      {/* PLACE ORDER */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white w-full py-3 rounded-xl text-lg font-semibold"
      >
        Place Order
      </button>

      {/* SUCCESS MESSAGE */}
      {successMsg && (
        <p className="text-center text-red-600 mt-4 text-lg font-semibold">
          {successMsg}
        </p>
      )}

    </div>
  );
};

export default Checkout;
