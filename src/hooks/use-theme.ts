import { useLayoutEffect, useState } from "react";

export function useTheme(ref: React.RefObject<HTMLElement>) {
  // `dark` is for all tailwindcss dark variants
  const themeClass = ["dark-theme", "dark"];
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const event = (e: MediaQueryListEvent) => setDark(e.matches);
    const prefersDark = matchMedia("(prefers-color-scheme: dark)");

    setDark(prefersDark.matches);
    prefersDark.addEventListener("change", event);
    return () => prefersDark.removeEventListener("change", event);
  }, []);

  useLayoutEffect(() => {
    if (dark) ref.current?.classList.add(...themeClass);
    else ref.current?.classList.remove(...themeClass);
  }, [dark]);

  return dark;
}
