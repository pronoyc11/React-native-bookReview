import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./SliceCreator";
export const Store = configureStore({
  reducer: {
bookStates:rootReducer
  },
})