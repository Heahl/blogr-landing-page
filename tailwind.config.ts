import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        'smallOneRoundedDiv' : '0 10vw 0 0',
        'bigOneRoundedDiv' : '0 30vw 0 0',
        'bigTwoRoundedDiv' : '0 30vw 0 30vw',
        'smallTwoRoundedDiv' : '0 10vw 0 10vw',
      },
      colors: {
        'cta-text' : 'hsl(356, 100%, 66%)',
        'cta-hover-bg' : 'hsl(355, 100%, 74%)',
        'headings' : 'hsl(208, 49%, 24%)',
        'white-text' : 'hsl(0, 0%, 100%)',
        'footer-text' : 'hsl(240, 2%, 79%)',
        'body-copy' : 'hsl(207, 13%, 34%)',
        'footer-bg' : 'hsl(240, 10%, 16%)',
        'very-light-red' : 'hsl(13, 100%, 72%)',
        'light-red' : 'hsl(353, 100%, 62%)',
        'very-dark-gray-blue' : 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blue' : 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        overpass: ["Overpass", ...fontFamily.sans],
        ubuntuLight: ["Ubuntu Light", ...fontFamily.sans],
        ubuntuMedium: ["Ubuntu Medium", ...fontFamily.sans],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
