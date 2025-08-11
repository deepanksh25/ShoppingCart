
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white">
      {/* Product Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 gap-2">
        <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {item.title}
        </h1>
        <p className="text-sm text-gray-500 line-clamp-2">
          {item.description}
        </p>

        {/* Price & Delete Button */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-green-600">₹{item.price}</p>
          <button
            onClick={removeFromCart}
            className="p-2 rounded-full bg-red-50 hover:bg-red-100 transition"
            title="Remove from cart"
          >
            <FcDeleteDatabase size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
