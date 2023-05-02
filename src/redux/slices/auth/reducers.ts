import { TAuthSlice } from "@/types/store";

export const setTokens = (state: any, action: any) => {
  state.authToken = action.payload.authToken;
  state.refreshToken = action.payload.refreshToken;
};
