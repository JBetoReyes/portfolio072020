const CHANGE_THEME = '[Theme] change theme';

interface IChangeTheme {
  type: typeof CHANGE_THEME;
  payload: string;
}

export type ThemeActionType = IChangeTheme;

export const changeTheme = (theme: string): ThemeActionType => ({
  type: CHANGE_THEME,
  payload: theme,
});
