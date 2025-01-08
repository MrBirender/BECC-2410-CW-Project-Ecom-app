import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";

/* place order for cod */
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    await User.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/* place order using stripe */
const placeOrderStripe = async (req, res) => {};

/* place order using razorpay */
const placeOrderRazorpay = async (req, res) => {};

/* show all order on admin panel */
const allOrders = async (req, res) => {};

/* show orders for user in particular */
const userOrder = async (req, res) => {};

/* update order status */
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrder,
  updateStatus,
};
