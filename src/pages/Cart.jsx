import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <div className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <p className="text-gray-500">Summary</p>
              <p className="mt-2 text-gray-700">
                Total Items: <span className="font-medium">{cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold">
                Total Amount: <span className="text-green-600">${totalAmount}</span>
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart State
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
