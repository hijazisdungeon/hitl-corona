export const Types = {
  setTheme: '@config/SET_THEME',
};

export function setTheme(data = {}) {
  return { type: Types.setTheme, ...data };
}
