import { Theme } from '../types';


/** Set the user's active theme. */
export const setTheme = (theme: Theme) => {
  window.localStorage.setItem("mkw-leaderboard.theme", theme as string);
  document.documentElement.setAttribute("data-theme", theme);
};

/** Get the user's active theme. */
export const getTheme = (): Theme => {
  const themeString = window.localStorage.getItem("mkw-leaderboard.theme") || "light";
  return (Object.values(Theme) as string[]).includes(themeString) ? themeString as Theme : Theme.Light;
};

/** Set the active theme to the one declared after it, or the first one if active is last. */
export const cycleTheme = (): void => {
  const themes = Object.values(Theme);
  const theme = getTheme();
  const themeIndex = themes.indexOf(theme) + 1;
  setTheme(themes[themeIndex >= themes.length ? 0 : themeIndex]);
};

export const initTheme = (): void => {
  setTheme(getTheme());
};
