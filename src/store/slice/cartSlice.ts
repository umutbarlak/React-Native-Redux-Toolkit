import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ItemCart} from '../../models/product';

interface CartState {
  carts: ItemCart[];
  totalPrice: number;
}

const initialState: CartState = {
  carts: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<ItemCart>) {
      const itemToAdd = state.carts.find(item => item.id === action.payload.id);
      if (itemToAdd) {
        itemToAdd.quantity += 1;
        state.totalPrice += Number(itemToAdd.price);
        return;
      }
      state.totalPrice += Number(action.payload.price);
      state.carts.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemToRemove = state.carts.find(item => item.id === action.payload);
      state.carts = state.carts.filter(item => item.id !== action.payload);

      state.totalPrice -=
        Number(itemToRemove?.price) * Number(itemToRemove?.quantity);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const itemToIncrease = state.carts.find(
        item => item.id === action.payload,
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        state.totalPrice += Number(itemToIncrease.price);
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const itemToIncrease = state.carts.find(
        item => item.id === action.payload,
      );

      if (itemToIncrease) {
        itemToIncrease.quantity -= 1;

        if (itemToIncrease.quantity === 0) {
          state.carts = state.carts.filter(item => item.id !== action.payload);
        }
        state.totalPrice -= Number(itemToIncrease.price);
      }
    },
  },
});

export const {addCart, removeFromCart, increaseQuantity, decreaseQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
