"use client";

import { Children, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch, FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
import { removeFromCart } from "../store/cartSlice";
import { SignedIn, SignedOut,SignInButton, UserButton } from "@clerk/nextjs";

const Header = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartItems = useSelector((state) => state.cart.items);
  
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalprice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex ml-[28px]">
      <header className="bg-white h-14">
        <div className="flex items-center h-30">
          <img src="header logo.png" className="mb-5 w-20 h-20 ml-[10px]" alt="Logo" />
          <h1 className="text-black pt-2 mb-5 ml-4 text-4xl font-bold">Furniro</h1>

          <nav className="flex justify-items-end items-end ml-52 -mt-3 text-xl font-bold space-x-10">
            <Link href="/" className="text-black hover:text-yellow-600">Home</Link>
            <Link href="/shop" className="text-black hover:text-yellow-600">Shop</Link>
            <Link href="/about" className="text-black hover:text-yellow-600">About</Link>
          </nav>

          <div className="flex space-x-12 ml-60 mb-3">
            <MdAccountCircle className="text-black text-2xl" />
            <FaSearch className="text-black text-2xl" />
            <FaHeart className="text-black text-2xl" />
            <FaShoppingCart onClick={toggleCart} className="text-black text-2xl cursor-pointer hover:text-yellow-600" />
            <SignedOut>
        <SignInButton></SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="text-lg flex w-20 h-8 items-center  border-1 border-amber-600 rounded-lg bg-amber-500">
        <UserButton showName appearance={{
      elements: {
        userButtonBox: "text-lg font-semibold", 
      },
    }}  ></UserButton>
        </div>
      </SignedIn>
          </div>
        </div>
        {children}
      </header>
      <div
        className={`fixed top-0 right-0 h-[550px] bg-white shadow-lg w-80 transition-transform transform z-20 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="py-8 px-4 border-b flex justify-between items-center">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <button onClick={toggleCart}>
            <IoClose className="rounded-full hover:bg-slate-600 hover:text-white" size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4 h-[300px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-8">
                <img src={item.image} className="w-16 h-16 rounded-lg" alt={item.name} />
                <div>
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x Rs. {item.price}
                  </p>
                </div>
                <IoClose
                  size={18}
                  onClick={() => handleRemove(item.id)}
                  className="ml-auto cursor-pointer text-white rounded-full bg-gray-500 hover:bg-red-600"
                />
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex space-x-4">
              <h3 className="text-lg font-bold text-black">Subtotal:</h3>
              <h3 className="text-lg font-bold text-yellow-600">Rs. {totalprice}</h3>
            </div>
            <div className="mt-4 flex space-x-2">
              <Link href="/cart">
                <button className="px-11 py-2 border border-black text-black rounded-full">Cart</button>
              </Link>
              <Link href="/checkout">
                <button className="px-11 py-2 border border-black text-black rounded-full">Checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {isCartOpen && (
        <div onClick={toggleCart} className="fixed inset-0 bg-black opacity-50 z-10" />
      )}
    </div>
  );
};

export default Header;
