import React, {useState} from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

const Placeorder = () => {
  const [method, setMethod] = useState('cod');
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pt-20 border-t sm:flex-row justify-between gap-5 sm:gap-14 min-h-[80vh]">
      {/* left side container */}
      <div className="flex flex-col gap-4 w-full max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"delivery"} text2={"information"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 px-3.5 py-2 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 px-3.5 py-2 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 px-3.5 py-2 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 px-3.5 py-2 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 px-3.5 py-2 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 px-3.5 py-2 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 px-3.5 py-2 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 px-3.5 py-2 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 px-3.5 py-2 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* right side container */}
      <div className="mt-8">
        <div className="mt-8 min-w-96">
        <CartTotal/>
        </div>

        <div className="text-lg my-6">
          <Title text1={"payment"} text2={"method"} />
          <div className="flex gap-4 flex-col sm:flex-row">
            <div onClick={()=> setMethod('stripe')} className="flex items-center gap-3 border px-3 py-2 ">
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'stripe' ?  'bg-green-500' : ''}`}></p>
              <img src={assets.stripe_logo} alt="stripe" className="h-5 mx-4" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className="flex items-center gap-3 border px-3 py-2 ">
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'razorpay' ?  'bg-green-500' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="razarpay" className="h-5 mx-4" />
            </div>
            <div onClick={()=> setMethod('cod')} className="flex items-center gap-3 border px-3 py-2 ">
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'cod' ?  'bg-green-500' : ''}`}></p>
              <p className="mx-4">Cash on Delivery</p>
            </div>
          </div>
        </div>

        <div className="w-full text-end mt-8">
        <button onClick={()=> navigate('/orders')} className="bg-black border border-black text-white py-3 px-8 ">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
