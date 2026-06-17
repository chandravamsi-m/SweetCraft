window.tailwind = window.tailwind || {};
window.tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                bg: 'var(--color-bg)',
                border: 'var(--color-border)',
                text: 'var(--color-text)',
            },
            fontFamily: {
                sans: ['var(--font-body)'],
                heading: ['var(--font-heading)'],
            }
        }
    }
}
