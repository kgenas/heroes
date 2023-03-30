import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import heroReducer from '../features/counter/loginHero';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
