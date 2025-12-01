import { useParams, useNavigate } from "react-router-dom";
import { buyNowDetails } from "../Components/Buynowdetails";
import Footer from "./Footer";

export default function BuyNowPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = buyNowDetails[id];

  if (!product) return <h1 className="text-center text-2xl mt-10">Product Not Found</h1>;

  return (

    <div>
    <div 
      className="min-h-screen p-6 flex justify-center"
    
    >
      <div 
        className="
          rounded-xl shadow-2xl p-6 
          w-full max-w-5xl 
          bg-white/10 backdrop-blur-md
          flex flex-col md:flex-row gap-8
        "
      >
        
        {/* PRODUCT IMAGE */}
        <img 
          src={product.image} 
          className="w-full md:w-80 h-80 object-contain mx-auto"
        />

        {/* PRODUCT DETAILS */}
        <div className="text-white">
          <h1 className="text-3xl font-bold  text-black" >{product.name}</h1>
          <h3 className="text-lg opacity-90  text-black">{product.specs}</h3>
          <h2 className="text-green-500 text-2xl font-bold mt-2">{product.price}</h2>

          <p className="mt-4 opacity-90  text-black">{product.description}</p>

          <h2 className="font-bold mt-5 text-xl  text-black">Key Specifications:</h2>
          <ul className="list-disc ml-6  text-black opacity-90">
            {product.extraSpecs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="font-bold mt-5 text-xl text-black">Available Colors:</h2>
          <div className="flex gap-3 mt-2 flex-wrap">
            {product.colors.map((c, index) => (
              <div 
                key={index} 
                className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white"
              >
                {c}
              </div>
            ))}
          </div>

          {/* BUY BUTTON */}
          <button
            onClick={() => navigate("/checkout", { state: product })}
            className="bg-green-500 text-white p-3 rounded-lg mt-6 w-full md:w-48 font-semibold"
          >
            Proceed to Buy
          </button>
        </div>

      </div>
      </div>

      <Footer />
    </div>
  );
}
