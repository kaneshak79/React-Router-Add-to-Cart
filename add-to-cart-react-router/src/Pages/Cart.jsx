import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-6 mt-2">
      <h2 className="text-2xl font-bold mb-4 text-center p-2 bg-[#f5f5f4]">Cart</h2>
      
      {cart.length === 0 && <p>Cart is empty</p>}
      
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-4 mx-8">
          <div>
            <h3 className="font-bold m-2 ml-20px">{item.title}</h3>
            <p>₹ {item.price}</p>
            <div className="flex gap-2 mt-2">
              <button 
              className="bg-white border border-gray-400 w-10 h-10
             flex items-center justify-center
             text-xl font-bold rounded mb-4" 
             onClick={() => updateQty(item.id, "dec")}>
                -
                </button>
              <span>{item.qty}</span>
              <button 
               className="bg-white border border-gray-400 w-10 h-10
             flex items-center justify-center
             text-xl font-bold rounded mb-4"
              onClick={() => updateQty(item.id, "inc")}>
                +
                </button>
            </div>
            <p className="font-bold">Total: ₹ {(item.price * item.qty).toFixed(2)}</p>
          </div>
        
          <button
            className="bg-red-500 text-white px-4 h-10"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
        
      ))}

      {cart.length > 0 && (
        <div className="mt-6 text-right mx-8">
          <p>Total Price: ₹ {total.toFixed(2)}</p>
          <p>Discount (10%): ₹ {discount.toFixed(2)}</p>
          <p className="font-bold text-xl">
            Final Price: ₹ {finalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
    
  );
};

export default Cart;
