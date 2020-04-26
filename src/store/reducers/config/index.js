import { Types } from './actions';

const INITIAL_STATE = {
  theme: 'light',
};

export default function configReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.setTheme: {
      return {
        theme: action.theme === 'light' ? 'dark' : 'light',
      };
    }

    default:
      return INITIAL_STATE;
  }
}
