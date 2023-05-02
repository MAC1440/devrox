import { TAuthSlice } from "@/types/store";

export const loginSuccess = (state: TAuthSlice, action: any) => {
  const data = action.payload.data;
  state.authToken = data.authToken;
  state.refreshToken = data.refreshToken;
};

export const registerSuccess = (state: TAuthSlice, action: any) => {
  const data = action.payload.data;
  state.authToken = data.authToken;
  state.refreshToken = data.refreshToken;
};
