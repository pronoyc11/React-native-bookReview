import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "./ActionCreator";

const initialState = {
  allBooks: [],
  category: null,
  userId: null,
  token: null,
  name: "Unknown",
  reviews: [],
  favourites: [],
};

const rootSlice = createSlice({
  name: "bookReducer",
  initialState,
  reducers: {
    clearAllState: (state) => {
      state.allBooks = [];
      state.category = null;
      state.userId = null;
      state.token = null;
      state.name = "Unknown";
      state.reviews = [];
      state.favourites = [];

    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addAllBooks: (state, action) => {
      state.allBooks = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      state.reviews = state.reviews.concat(action.payload);
    },
    loadFav: (state, action) => {
      state.favourites = action.payload;
    },
    addFav: (state, action) => {
      state.favourites = state.favourites.concat(action.payload);
    },
    delFav: (state, action) => {
      state.favourites = state.favourites.filter(
        item => item.key !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.token = state.token;
      })
      .addCase(authUser.rejected, () => {
        state.userId = state.userId;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        const data = action.payload;
        if (data) {
          state.userId = data.localId;
          state.token = data.idToken;
          state.name = data.email.split("@")[0];
        }
      });
  },
});
export const {
  clearAllState,
  addCategory,
  addAllBooks,
  loadReviews,
  addReview,
  loadFav,
  addFav,
  delFav,
} = rootSlice.actions;
export default rootSlice.reducer;
