/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: {
    lightMode: string;
    plugins: any[];
    theme: {
        extend: {
            spacing: { "128": string };
            screens: { xl: string; "2xl": string; md: string; sm: string; lg: string };
            backgroundImage: { "gradient-conic": string; "gradient-radial": string };
            colors: { my_l_blue: string; my_l_green: string; my_blue: string; my_white: string; header_green: string }
        }
    };
    content: string[]
} = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    lightMode: 'class',
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
            },
            colors: {
                // 'my_red': '#D50000',
                // 'my_green': '#39c703',
                'my_l_green': '#02bb5f',
                'my_blue': '#004E98',
                'my_l_blue': '#0285d5',
                'my_white': '#fff',
                'header_green': '#02bb5f',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [],
}
export default config
