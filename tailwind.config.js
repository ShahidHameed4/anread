/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        // light mode
        voodoo: {
          50: '#F3E9EF',
          100: '#E0C2D2',
          200: '#CA9BB3',
          300: '#AF7495',
          400: '#945F7C',
          500: '#773F63', // this is the main Voodoo color
          600: '#643051',
          700: '#50253F',
          800: '#3B1A2D',
          900: '#27111C',
        },

        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },

          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: "#131A2B",
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },

          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },

      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],

  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
    },
    colors: {
      ...colors,
      mainColor: {
        40: "#5858FA",
        100: "#972ADB",
        50: "#AC55E2",
        25: "#B970E7",
        20: "#F6EEFF",
        15: "#CF9DEE",
        10: "#DFBDF4",
        5: "#F5EAFB",
      },
      refColor: {
        100: "#5858FA",
      },
      secondaryColor: {
        100: "#1D3294",
        50: "#5570F1",
        25: "#96A8FF",
        15: "#CED7FF",
        10: "#F2F5FF",
      },

      headerColor: {
        100: "#FFFFFF",
      },

      headerColor: {
        100: "#FFFFFF",
      },

      nuetralColor: {
        200: "#7B858F",
        100: "#717171",
        50: "#BEBEBE",
        25: "#DFE3E5",
        15: "#F6F6F6",
      },

      successColor: {
        150: "#009341",
        100: "#6BD098",
        50: "hsla(147, 52%, 62%, 0.1)",
      },

      warningColor: {
        150: "#B58500",
        100: "hsla(44, 100%, 57%, 1)",
        50: "hsla(44, 100%, 57%, 0.1)",
      },

      normalColor: {
        100: "hsla(216, 100%, 50%, 1)",
        50: "hsla(216, 100%, 50%, 0.1)",
        25: "hsla(200, 10%, 89%, 0.5)",
      },

      error: {
        100: "#FF2E00",
      },
      100: "#FF2E00",
      50: "#FFEEEB",
    },
    extend: {
      colors: {
        // light mode
        voodoo: {
          50: '#F3E9EF',
          100: '#E0C2D2',
          200: '#CA9BB3',
          300: '#AF7495',
          400: '#945F7C',
          500: '#773F63',
          600: '#643051',
          700: '#50253F',
          800: '#3B1A2D',
          900: '#27111C',
        },
      },

      fontFamily: {
        custom: ['"Plus Jakarta Sans"', 'sans-serif'], 
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        UpgradeBlur:
          "linear-gradient(114.17deg, rgba(255, 255, 255, 0.4) -95.06%, rgba(255, 255, 255, 0) 98.15%)",
      },
    },
  },
};
