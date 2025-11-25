/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#FFFADC',
                lime: {
                    primary: '#B6F500',
                    secondary: '#A4DD00',
                    supporting: '#98CD00',
                },
                editorial: { // Keeping for backward compatibility during migration, mapped to new palette
                    white: '#FFFADC',
                    black: '#111111',
                    yellow: '#B6F500',
                    gray: '#F5F5F5',
                    border: '#E2E2E2'
                }
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
