var config = {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cream: "#F7F5F2",
                offwhite: "#F7F5F2",
                ink: "#6B6B6B",
                softgray: "#6B6B6B",
                mint: "#A8BFA3",
                sage: "#A8BFA3",
                peach: "#D9C7B8",
                beige: "#D9C7B8",
                cta: "#E9784A",
                "cta-dark": "#D9663C",
                mist: "#F2E3B6",
                butter: "#F2E3B6",
                blush: "#F2E3B6",
                white: "#FFFFFF",
            },
            fontFamily: {
                display: ["Baloo 2", "cursive"],
                body: ["Nunito Sans", "sans-serif"],
            },
            boxShadow: {
                card: "0 20px 55px rgba(107, 107, 107, 0.10)",
                glow: "0 28px 70px rgba(233, 120, 74, 0.22)",
            },
            borderRadius: {
                panel: "2rem",
            },
            backgroundImage: {
                "hero-wash": "radial-gradient(circle at top left, rgba(168,191,163,0.62), transparent 36%), radial-gradient(circle at bottom right, rgba(217,199,184,0.48), transparent 30%)",
            },
        },
    },
    plugins: [],
};
export default config;
