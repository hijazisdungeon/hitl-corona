import { useContext } from 'react';

import { ThemeContext } from '~/components/Theme';

export const useTheme = () => useContext(ThemeContext);
