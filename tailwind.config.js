/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                airCncTheme: {
                    primary: "#2bde8c",
                    secondary: "#00a799",
                    accent: "#7bf04d",
                    neutral: "#3D4451",
                    "base-100": "#FFFFFF",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
