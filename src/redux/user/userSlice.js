import { createSlice } from "@reduxjs/toolkit";


const INITIALSTATE = {
  currentUser: null,
  hiddenMenu: true,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIALSTATE,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser : action.payload,
        
      };
    },
  

    toggleMenu: (state) => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    },
  },
});

export const { setCurrentUser, toggleMenu } = userSlice.actions;
export default userSlice.reducer;
