module.exports = {
    theme: {
        borderWidth: {
            default: "1px",
            "0": "0",
            "2": "2px",
            "4": "4px",
            "6": "6px",
            "8": "8px"
        },
        extend: {
            colors: {
                gray: {
                    100: 'hsl(0, 2%, 98%)',
                    200: 'hsl(0, 2%, 95%)',
                    300: 'hsl(0, 1%, 92%)',
                    400: 'hsl(0, 1%, 84%)',
                    500: 'hsl(0, 1%, 69%)',
                    600: 'hsl(0, 2%, 52%)',
                    700: 'hsl(0, 2%, 35%)',
                    800: 'hsl(0, 3%, 23%)',
                    900: 'hsl(0, 3%, 14%)',
                },
                purple: {
                    100: 'hsl(270, 90%, 98%)',
                    200: 'hsl(270, 70%, 92%)', 
                    300: 'hsl(268, 70%, 88%)',
                    400: 'hsl(266, 63%, 78%)',
                    500: 'hsl(264, 53%, 70%)', 
                    600: 'hsl(266, 36%, 59%)',
                    700: 'hsl(264, 24%, 52%)',
                    800: 'hsl(264, 20%, 42%)',
                    900: 'hsl(264, 15%, 34%)',
                },
                orange: {
                    100: 'hsl(29, 100%, 97%)',
                    200: 'hsl(29, 100%, 89%)',
                    300: 'hsl(29, 100%, 83%)',
                    400: 'hsl(28, 98%, 65%)',
                    500: 'hsl(27, 98%, 57%)',
                    600: 'hsl(24, 98%, 50%)', 
                    700: 'hsl(24, 98%, 42%)',
                    800: 'hsl(22, 92%, 37%)',
                    900: 'hsl(20, 80%, 30%)',
                },
            },
            boxShadow: {
                outline: '0 0 0 3px #4299e155',
            },
            
        },
    },
    
    variants: {
        display: ['responsive', 'group-hover'],
    },
    plugins: [
        require('tailwindcss/lib/plugins/container')({
            center: true,
        }),
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
};
