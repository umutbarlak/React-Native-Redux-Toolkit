import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import productReducer from './slice/productsSlice';
import cartReducer from './slice/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
