import { useTheme, type Theme } from '../../contexts/ThemeContext';

interface ThemeSelectorProps {
  isCollapsed: boolean;
}

export default function ThemeSelector({ isCollapsed }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {!isCollapsed && (
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="mt-4 p-2 rounded-lg text-sm ws-input"
        >
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      )}
    </>
  );
}