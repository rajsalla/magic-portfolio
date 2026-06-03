(() => {
  try {
    const root = document.documentElement;
    const configEl = document.getElementById("theme-config");
    const config = configEl ? JSON.parse(configEl.textContent || "{}") : {};

    for (const [key, value] of Object.entries(config)) {
      root.setAttribute(`data-${key}`, value);
    }

    const resolveTheme = (themeValue) => {
      if (!themeValue || themeValue === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return themeValue;
    };

    const savedTheme = localStorage.getItem("data-theme");
    root.setAttribute("data-theme", resolveTheme(savedTheme));

    for (const key of Object.keys(config)) {
      const value = localStorage.getItem(`data-${key}`);
      if (value) {
        root.setAttribute(`data-${key}`, value);
      }
    }
  } catch (e) {
    console.error("Failed to initialize theme:", e);
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
