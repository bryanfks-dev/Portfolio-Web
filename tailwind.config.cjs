/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/components/**.jsx"
    ],
    theme: {
        colors: {
            "primary-bg": "var(--primary-bg-color)",
            "secondary-bg": "var(--secondary-bg-color)",
            "primary-color": "var(--primary-color)",
            "secondary-color": "var(--secondary-color)",
            "tertiary-color": "var(--tertiary-color)",
            "primary-select-item": "var(--primary-select-item)",
            "primary-selected-item": "var(--primary-selected-item)",
            "exclusive-white": "#ffffff",
            "exclusive-black": "#000000"
        },
        extend: {
            gap: {
                '1.25': '0.3125rem'
            },
            height: {
                '0.75': '0.1875rem'
            },
            width: {
                '4.5': '1.125rem'
            }
        },
    },
    plugins: [],
}
