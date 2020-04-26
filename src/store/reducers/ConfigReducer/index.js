import { createReducer } from 'reduxsauce';

import { light, dark } from '~/styles/themes';

import { Types } from './actions';

const INITIAL_STATE = {
  theme: light,
};
const setTheme = (state, action) => ({
  theme: action.themeName === 'dark' ? light : dark,
});

export default createReducer(INITIAL_STATE, {
  [Types.setTheme]: setTheme,
});
