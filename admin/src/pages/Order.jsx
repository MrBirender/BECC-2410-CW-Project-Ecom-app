import { useState } from "react";
import { toast } from "react-toastify";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return <div></div>;
};

export default Order;
