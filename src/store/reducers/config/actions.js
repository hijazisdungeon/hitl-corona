export const Types = {
  setTheme: '@config/SET_THEME',
};

export function setTheme(theme) {
  return { type: Types.setTheme, theme };
}
