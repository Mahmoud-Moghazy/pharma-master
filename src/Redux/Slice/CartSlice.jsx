import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the cart
const initialState = {
  cartItem: [], // Array to hold the items in the cart
  totalAmount: 0, // Total amount of all items in the cart
  totalQuantity: 0, // Total quantity of all items in the cart
};

// Create a slice for managing the cart state
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer function to add an item to the cart
    addItem: (state, action) => {
      const newItem = action.payload; // New item to be added to the cart
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      ); // Check if the item already exists in the cart

      state.totalQuantity++; // Increment the total quantity of items in the cart

      // If the item does not exist in the cart, add it
      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.image,
          prices: newItem.price,
          quantities: 1,
          pharmacy: newItem.pharmacy, // Set quantity to 1 for a new item
          totalPrice: newItem.price, // Set total price to the price of a single item
        });
      } else {
        // If the item exists in the cart, increment its quantity and update the total price
        existingItem.quantities++;
        existingItem.totalPrice += newItem.prices;
      }

      // Calculate the total amount by summing up the prices of all items in the cart
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.prices * item.quantities,
        0
      );

      // Log the total quantity, cart items, and new item for debugging
      console.log(state.totalQuantity);
      console.log(state.cartItem);
      console.log(newItem);
    },
    // Reducer function to delete an item from the cart
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      if (existingItem) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantities;
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.prices * item.quantities,
        0
      );
    },
  },
});

// Export the action creators and reducer function
export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
