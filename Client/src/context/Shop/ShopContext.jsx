import { createContext, useEffect, useState } from "react";
import { products } from "../../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (item_id, size) => {
    if (!size) {
      return toast.error("Please select a size");
    }
    let cartData = structuredClone(cartItems);

    if (cartData[item_id]) {
      if (cartData[item_id][size]) {
        cartData[item_id][size] += 1;
      } else {
        cartData[item_id][size] = 1;
      }
    } else {
      cartData[item_id] = {};
      cartData[item_id][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        try {
          if (cartItems[item][size] > 0) {
            totalCount += cartItems[item][size];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = (item_id, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[item_id][size] = quantity;
    setCartItems(cartData);
  };

  const getCartTotal = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartTotal,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
