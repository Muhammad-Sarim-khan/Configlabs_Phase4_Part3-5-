"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import Link from "next/link";
import Perks from "../components/perks";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalprice = cartItems.reduce((total, item) => Number(total) + Number(item.price) * item.quantity, 0);

  return (
    <>
      <div className="mt-[120px] ml-[180px] space-y-4">
        <h1 className="text-5xl font-bold">Cart</h1>
        <p className="text-xl">Home&gt;Cart</p>
      </div>

      <div className="flex h-[200px]">
        <div className="flex items-center justify-center w-[1000px] h-[55px] bg-orange-100 text-2xl font-bold space-x-32 mt-[70px] ml-[170px] px-[150px]">
          <h1>Product</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>SubTotal</h1>
        </div>

        <div className="w-[393px] h-[390px] bg-orange-100 ml-[30px] mt-[70px]">
          <h1 className="mt-[30px] text-2xl font-bold ml-[100px]">Cart Totals</h1>
          <div className="flex space-x-12 mt-[30px] justify-center">
            <p>Subtotal:</p>
            <p className="text-gray-500 font-bold">Rs. {totalprice}</p>
          </div>
          <div className="flex space-x-12 mt-[30px] justify-center">
            <p>Total:</p>
            <p className="text-xl font-bold text-yellow-600">Rs. {totalprice}</p>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/checkout">
              <div className="w-[160px] h-[60px] border border-black px-11 py-4 mt-[30px] rounded-lg">Checkout</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[500px] ml-[90px]">
        {cartItems.map((item) => (
          <div key={item.id} className="flex space-x-32 ml-[10px] mt-8">
            <img
              className="w-[70px] h-[70px] bg-orange-100 rounded-lg"
              src={item.image}
              alt={item.name}
            />

            <div className="flex mt-[20px] space-x-32">
              <p>{item.name}</p>
              <p>Rs. {item.price}</p>
              <button
                className="w-[40px] h-[40px] rounded-lg px-2 border border-r-gray-600"
              >
                {item.quantity}
              </button>
              <p>Rs. {(Number(item.price) * item.quantity)}</p>
              <div className="flex w-[90px] h-[50px] bg-red-600 border-black rounded-md py-[5px] px-[5px] items-center justify-center">
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-white cursor-pointer">
                Remove
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Perks />
    </>
  );
};

export default Cart;
