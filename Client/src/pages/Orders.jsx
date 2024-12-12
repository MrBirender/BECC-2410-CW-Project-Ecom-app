import React, { useContext } from "react";
import { ShopContext } from "../context/Shop/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-xl sm:text-2xl my-3">
        <Title text1={"My"} text2={"orders"} />
      </div>

      <div >
        {products.slice(0, 4).map((product, index) => (
          <div
            key={index}
            className="border-t gap-6 mb-3 sm:mb-6 border-b py-4 text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center  "
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={product.image[0]}
                alt="product"
                key={index}
              />
              <div>
                <p className="text-xs sm:text-sm font-medium">{product.name}</p>
                <div className="flex flex-col mt-2  gap-4">
                  <div className="flex items-center gap-3 mt-2 text-base ">
                    <p>
                      {currency}
                      {product.price}.00
                    </p>
                    <p>Quantity: 1</p>
                    <p>size: M</p>
                  </div>
                  <p>Date: <span className="ml-2 text-gray-500">11, December, 2024</span></p>
                </div>
              </div>
            </div>

            {/* center input */}

            <div className="flex flex-col sm:flex-row gap-5 w-1/2 justify-between">
              <div className="flex items-center gap-2">
              <p className="min-w-2.5 h-2.5 border rounded-full bg-green-500"></p>
              <p className="text-base font-medium">Ready to ship</p>
              </div>
              <button className="border text-sm py-2 px-4 font-medium">Track Order</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orders;
