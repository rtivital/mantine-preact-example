import { h } from "preact";
import { ActionIcon, useMantineTheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";
import { useContext } from "preact/hooks";
import ColorSchemeContext from "./ColorSchemeContext";

export default function ThemeToggle() {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";
  const colorSchemeContext = useContext(ColorSchemeContext);

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => colorSchemeContext.onChange(dark ? "light" : "dark")}
    >
      {dark ? (
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}
