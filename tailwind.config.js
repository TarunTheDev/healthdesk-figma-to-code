module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-colorsecondary": "var(--main-colorsecondary)",
        phytagelaboratoriescomblack: "var(--phytagelaboratoriescomblack)",
        "phytagelaboratoriescomcatskill-white":
          "var(--phytagelaboratoriescomcatskill-white)",
        phytagelaboratoriescomdenim: "var(--phytagelaboratoriescomdenim)",
        phytagelaboratoriescommercury: "var(--phytagelaboratoriescommercury)",
        phytagelaboratoriescomscorpion: "var(--phytagelaboratoriescomscorpion)",
        "phytagelaboratoriescomtory-blue":
          "var(--phytagelaboratoriescomtory-blue)",
        phytagelaboratoriescomtundora: "var(--phytagelaboratoriescomtundora)",
        second: "var(--second)",
        white: "var(--white)",
        wwwwindmillvitaminscomwhite: "var(--wwwwindmillvitaminscomwhite)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "phytagelaboratories-com-inter-medium":
          "var(--phytagelaboratories-com-inter-medium-font-family)",
        "phytagelaboratories-com-inter-regular":
          "var(--phytagelaboratories-com-inter-regular-font-family)",
        "phytagelaboratories-com-semantic-button":
          "var(--phytagelaboratories-com-semantic-button-font-family)",
        "phytagelaboratories-com-semantic-input":
          "var(--phytagelaboratories-com-semantic-input-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
