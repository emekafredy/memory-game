import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IStatsResponse } from "../../interface/response.interface";

type StatsProps = {
  stats: IStatsResponse;
};

const initialState: StatsProps = {
  stats: {
    previousScore: {
      moves: 0,
    },
    bestScore: {
      moves: 0,
    },
  },
};

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<IStatsResponse>) => {
      state.stats = action.payload;
    },
  },
});

export const { setStats } = statsSlice.actions;

export const getStatsState = (state: RootState): StatsProps => {
  return state.stats;
};

export default statsSlice.reducer;
