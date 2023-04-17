import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeroState {
  name: string;
  logged?: boolean;
}

const initialState: HeroState = {
  name: '',
  logged:false,
};

export const hero = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    login: (state , action: PayloadAction<HeroState>) => {
      const { name } = action.payload;
      return{
        ...state,
        logged: true,
        name
      };
    },
    logout: (state) => {
      state.logged = initialState.logged;
    },    
  },  
});

export const { login , logout } = hero.actions;
export default hero.reducer;
