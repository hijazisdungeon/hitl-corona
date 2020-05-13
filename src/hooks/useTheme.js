import { useContext } from 'react';

import { ThemeContext } from '~/components/Theme';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
