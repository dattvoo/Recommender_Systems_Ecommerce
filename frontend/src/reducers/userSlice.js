import Cookies from "js-cookie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = Cookies.get("user")
  ? JSON.parse(Cookies.get("user"))
  : null;

const addToCart= createAsyncThunk(
  "product/addToCart",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    LOGIN(state, action) {
      return action.payload;
    },
  },


  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addToCart.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
});

// export function userReducer(
//     state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,s
//     action
// ) {
//     switch (action.type) {
//         case "LOGIN":
//             return action.payload;
//         case "ACTIVATE":
//             return {
//                 ...state, verified: action.payload
//             }
//         case "LOGOUT":
//             return null;

//         default:
//             return state;
//     }
// }
