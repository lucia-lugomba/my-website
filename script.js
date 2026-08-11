window.tailwind = window.tailwind || {};
window.tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-bright": "#fcf9f8",
                "on-tertiary": "#ffffff",
                "on-tertiary-fixed-variant": "#6f3800",
                "secondary-fixed-dim": "#59dad1",
                "on-primary-container": "#8ebdf9",
                "on-tertiary-fixed": "#2f1400",
                "surface-container-high": "#eae7e7",
                "surface-container-highest": "#e5e2e1",
                "error": "#ba1a1a",
                "surface-container-lowest": "#ffffff",
                "primary-fixed": "#d2e4ff",
                "inverse-primary": "#a0c9ff",
                "on-secondary-container": "#006f69",
                "surface-dim": "#dcd9d9",
                "outline-variant": "#c2c7d1",
                "on-primary-fixed": "#001c37",
                "primary-container": "#0f4c81",
                "on-error-container": "#93000a",
                "on-surface-variant": "#42474f",
                "outline": "#727780",
                "surface-container": "#f0eded",
                "primary-fixed-dim": "#a0c9ff",
                "tertiary-fixed-dim": "#ffb780",
                "tertiary-container": "#743b00",
                "surface-tint": "#2d6197",
                "on-tertiary-container": "#faa766",
                "secondary-container": "#76f3ea",
                "inverse-surface": "#313030",
                "background": "#fcf9f8",
                "tertiary-fixed": "#ffdcc4",
                "surface-variant": "#e5e2e1",
                "on-secondary": "#ffffff",
                "on-background": "#1c1b1b",
                "inverse-on-surface": "#f3f0ef",
                "error-container": "#ffdad6",
                "on-primary-fixed-variant": "#07497d",
                "tertiary": "#532800",
                "surface": "#fcf9f8",
                "primary": "#00355f",
                "on-secondary-fixed": "#00201e",
                "on-surface": "#1c1b1b",
                "on-primary": "#ffffff",
                "on-secondary-fixed-variant": "#00504c",
                "on-error": "#ffffff",
                "surface-container-low": "#f6f3f2",
                "secondary": "#006a65",
                "secondary-fixed": "#79f6ed"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "section-padding": "5rem",
                "stack-gap": "1rem",
                "container-max": "1200px",
                gutter: "1.5rem"
            },
            fontFamily: {
                "display-lg-mobile": ["Montserrat"],
                "headline-md": ["Montserrat"],
                "body-md": ["Inter"],
                "label-sm": ["JetBrains Mono"],
                "display-lg": ["Montserrat"],
                "body-lg": ["Inter"]
            },
            fontSize: {
                "display-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
                "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "label-sm": ["12px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }],
                "display-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
            }
        }
    }
};

// Add optional menu toggle behavior if a mobile nav is added later.
function setupMobileMenu() {
    const menuButton = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('[data-mobile-nav]');
    if (!menuButton || !nav) return;
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);
