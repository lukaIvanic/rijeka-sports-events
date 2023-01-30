import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from "./reducers/leagueReducer"
import authReducer from "./reducers/authReducer"
import gameReducer from "./reducers/gameReducer"

export const store = configureStore({
  reducer: {
    league: leagueReducer,
    auth: authReducer,
    game: gameReducer,
  },
});
