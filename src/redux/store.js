import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/lib/persistStore";
import categoriesReducer from "./categorias/categoriesSlice";
import productsReducer from "./products/ProductSlice";
import cartReducer from "./cart/Slice.Cart";
import userReducer from "./user/userSlice";
import orderReduder from "./ordenes/OrderSlice";
import FormReducer from "./Form/FormSlice";
const reducers = combineReducers({
  categorias: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  ordenes: orderReduder,
  form: FormReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
