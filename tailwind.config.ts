/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textBlack: '#242429',
        textLight: '#878799',
        textDarkt: '#636370',
        fillLightBgLightContr: '#F5F5FA',
        fillButtonAccentDefault: '#7A7ACC',
        fillTableHead: '#E1E1F5',
        fillTableRow: '#F0F0FA',
        fillTableRow2: '#F5F5FA',
        fillTableStrokeTableHead: '#dcdcfa',
        fillTableStrokeTableRow: '#E6E6FA',
        fillLinkRest: '#878799',
        fillLinkHover: '#5C5C99',
        fillLinkActive: '#4D4D99',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        // UPDATED UI KIT =====================================================================================================
        ////////////////////////////////// Light theme

        // Background
        lightBackground: '#FCF8FF',
        // Primary
        lightPrimary: '#575992',
        lightOnPrimary: '#FFFFFF',
        lightPrimaryContainer: '#E1E0FF',
        lightOnPrimaryContainer: '#12144B',
        // Secondary
        lightSecondary: '#5D5D72',
        lightOnSecondary: '#FFFFFF',
        lightSecondaryContainer: '#E2E0F9',
        lightOnSecondaryContainer: '#191A2C',
        // Tertiary
        lightTertiary: '#79536A',
        lightOnTertiary: '#FFFFFF',
        lightTertiaryContainer: '#FFD8EC',
        lightOnTertiaryContainer: '#2E1125',
        // Error
        lightError: '#BA1A1A',
        lightOnError: '#FFFFFF',
        lightErrorContainer: '#FFDAD6',
        lightOnErrorContainer: '#410002',
        // Surface
        lightSurface: '#FCF8FF',
        lightOnSurface: '#1B1B21',
        lightOnSurfaceDisabled: 'rgba(27, 27, 33, 0.12)',
        lightSurfaceVariant: '#E4E1EC',
        lightOnSurfaceVariant: '#46464F',
        lightSurfaceContainerLowest: '#FFFFFF',
        lightSurfaceContainerLow: '#F6F2FA',
        lightSurfaceContainer: '#F0ECF4',
        lightSurfaceContainerHigh: '#EAE7EF',
        lightSurfaceContainerHigher: '#E4E1E9',
        // Outline
        lightOutline: '#777680',
        lightOutlineVariant: '#C7C5D0',
      },
      fontSize: {
        // Display
        display1: '56px',
        display2: '48px',
        display3: '44px',

        // Heading
        heading1: '36px',
        heading2: '32px',
        heading3: '28px',
        heading4: '26px',
        heading5: '24px',
        heading6: '20px',

        // Text
        textLarge: '18px',
        textBase: '16px',
        textSmall: '14px',
        textXSmall: '12px',
      },
      lineHeight: {
        // Display 1
        display1: '64px',

        // Display 2
        display2: '56px',

        // Display 3
        display3: '56px',

        // Heading 1
        heading1: '44px',

        // Heading 2
        heading2: '40px',

        // Heading 3
        heading3: '36px',

        // Heading 4
        heading4: '34px',

        // Heading 5
        heading5: '32px',

        // Heading 6
        heading6: '28px',

        // Text large
        textLarge: '27px',

        // Text base
        textBase: '24px',

        // Text small
        textSmall: '20px',

        // Text xSmall
        textXSmall: '16px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
