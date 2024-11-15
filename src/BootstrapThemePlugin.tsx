import React, { useState, useEffect, useCallback } from 'react';

const themes = [
  'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'litera',
  'lumen', 'lux', 'materia', 'minty', 'pulse', 'sandstone', 'simplex',
  'sketchy', 'slate', 'solar', 'spacelab', 'superhero', 'united', 'yeti'
];

export type BootstrapTheme = typeof themes[number];

export class BootstrapThemePlugin {
  private initialTheme: string;

  constructor(initialTheme: string) {
    this.initialTheme = initialTheme;
  }

  useThemeComponent = () => {
    const [theme, setTheme] = useState(this.initialTheme);

    useEffect(() => {
      const link = document.createElement('link');
      link.href = `https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/${theme}/bootstrap.min.css`;
      link.rel = 'stylesheet';
      link.id = 'theme-stylesheet';

      document.head.appendChild(link);

      return () => {
        const existingLink = document.getElementById('theme-stylesheet');
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      };
    }, [theme]);

    const handleThemeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
      setTheme(event.target.value);
    }, []);

    const ThemeSelector = () => (
      <div className="mb-3">
        <label htmlFor="themeSelect" className="form-label">Select Theme:</label>
        <select
          id="themeSelect"
          className="form-select"
          value={theme}
          onChange={handleThemeChange}
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    );

    return { theme, setTheme, ThemeSelector };
  };
}

export default BootstrapThemePlugin;