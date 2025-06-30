import { createSlice } from "@reduxjs/toolkit";
import {client} from "@/sanity/lib/client"


const loadCartFromStorage = () => {
  if (typeof window === "undefined") return []; 

  try {
    const serializedCart = localStorage.getItem("cartItems");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
  items: loadCartFromStorage(),
  },

  reducers: {
    addToCart: (state, action) => {
        const data =client.fetch(`*[_type=="product_details"]{
            _id,
            heading,
            subheading_desc,
            subheading,
            "imageUrl": image.asset->url}`)
        const { id, name, subheading, price, image } = action.payload;
        const unique_key = `${client._id}-${client.subheading}-${client.subheading_desc}-${client.imageUrl}`
  

        const existingItem = state.items.find(
          (item) =>
            item.id === data._id &&
            item.heading === data.heading &&
            item.subheading_desc === data.subheading_desc &&
            item.subheading === data.subheading&&
            item.image===data.imageUrl
        );
  
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 ,unique_key,price:Number(price)||0}); 
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.unique_key !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
