/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                mercy: {
                    50: "#f6f7ff",
                    100: "#eceeff",
                    200: "#d7dbff",
                    300: "#b7bcff",
                    400: "#8f95ff",
                    500: "#6b6cff",
                    600: "#4d44ff",
                    700: "#3f31e8",
                    800: "#3429bd",
                    900: "#2d2696",
                },
            },
        },
    },
    plugins: [],
};
