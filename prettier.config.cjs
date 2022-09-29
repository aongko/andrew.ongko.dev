module.exports = {
  semi: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [
    require("prettier-plugin-astro"),
    require("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "**/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
