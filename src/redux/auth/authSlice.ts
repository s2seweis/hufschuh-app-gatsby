import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";
import { pick } from "lodash";

export type AuthState = {
  // horses: any;
  user?: Partial<User>;
  tokens?: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
};

const initialState: AuthState = {
  user: undefined,
  tokens: undefined,
  // horses: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      console.log("line:100", state);
      console.log("line:101", action);
      if (action.payload.user) {
        state.user = pick(action.payload.user, ["id", "role"]);
        console.log("line:102", state.user);
      }

      if (action.payload.tokens) {
        state.tokens = action.payload.tokens;
        console.log("line:103", state.tokens);
      }

      // if (action.payload.tokens) {
      //   state.horses = action.payload.horses;
      //   console.log("line:104", state.horses);

      // }
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
