import { h } from "preact";
import { Text } from "@mantine/core";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Text style={{ maxWidth: "80%" }}>
        This is example project for{" "}
        <Text component="a" variant="link" href="https://mantine.dev">
          Mantine
        </Text>{" "}
        usage with Preact. Browse{" "}
        <Text
          component="a"
          variant="link"
          href="https://github.com/mantinedev/mantine-preact-example"
        >
          source code
        </Text>{" "}
        of this project on Github or{" "}
        <Text
          component="a"
          variant="link"
          href="https://mantine.dev/guides/preact/"
        >
          see Preact guide
        </Text>{" "}
        on Mantine docs website.
      </Text>
      <ThemeToggle />
    </div>
  );
}
