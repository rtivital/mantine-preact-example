import { h } from "preact";
import { useEffect } from "preact/hooks";
import { useWindowEvent, useLocalStorageValue } from "@mantine/hooks";
import { MantineProvider } from "@mantine/core";
import { TodoList } from "./TodoList";
import ColorSchemeContext from "./ColorSchemeContext";

const THEME_KEY = "mantine-preact-color-scheme";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: THEME_KEY,
    defaultValue: "light",
  });

  useWindowEvent("keydown", (event) => {
    if (event.code === "KeyJ" && (event.ctrlKey || event.metaKey)) {
      setColorScheme((current) => (current === "dark" ? "light" : "dark"));
    }
  });

  useEffect(() => {
    const initialTheme = localStorage.getItem(THEME_KEY);

    if (initialTheme === "dark") {
      setColorScheme("dark");
    }
  }, []);

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, onChange: setColorScheme }}
    >
      <MantineProvider theme={{ colorScheme }}>
        <TodoList />
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
