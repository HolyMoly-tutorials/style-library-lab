import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { createVar, style } from '@vanilla-extract/css';
import { generateColors, type TColor } from '../../../utils/generate-colors';

// CSS 변수 정의
const themeColorVar = createVar();
const themeForegroundVar = createVar();

const baseButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--border-radius-300)',
  border: 'none',
  color: 'var(--foreground-accent)',
  cursor: 'pointer',
  vars: {
    [themeColorVar]: 'transparent',
    [themeForegroundVar]: 'var(--foreground-accent)',
  },
  
  ':disabled': {
    pointerEvents: 'none',
    opacity: 0.32,
  },
});

export const buttonRecipe = recipe({
  base: baseButton,

  variants: {
    size: {
      sm: {
        gap: 'var(--space-050)',
        height: 'var(--dimension-300)',
        padding: '0 var(--space-100)',
        fontSize: 'var(--font-size-subtitle1)',
        lineHeight: 'var(--line-height-subtitle1)',
      },
      md: {
        gap: 'var(--space-075)',
        height: 'var(--dimension-400)',
        padding: '0 var(--space-150)',
        fontSize: 'var(--font-size-subtitle1)',
        lineHeight: 'var(--line-height-subtitle1)',
      },
      lg: {
        gap: 'var(--space-100)',
        height: 'var(--dimension-500)',
        padding: '0 var(--space-200)',
        fontSize: 'var(--font-size-subtitle1)',
        lineHeight: 'var(--line-height-subtitle1)',
      },
      xl: {
        gap: 'var(--space-100)',
        height: 'var(--dimension-600)',
        padding: '0 var(--space-300)',
        fontSize: 'var(--font-size-heading6)',
        lineHeight: 'var(--line-height-heading6)',
      },
    },
    stretch: {
      true: { width: '100%' },
      false: {},
    },
    color: {
      primary: { vars: generateButtonColors('primary') },
      secondary: { vars: generateButtonColors('secondary') },
      success: { vars: generateButtonColors('success') },
      warning: { vars: generateButtonColors('warning') },
      danger: { vars: generateButtonColors('danger') },
      hint: { vars: generateButtonColors('hint') },
      contrast: { vars: generateButtonColors('contrast') },
    },
    shape: {
      fill: {
        backgroundColor: themeColorVar,
        color: themeForegroundVar,
      },
      outline: {
        color: 'var(--foreground-on-transparent)',
        border: `0.0625rem solid ${themeColorVar}`,
      },
      invisible: {
        color: 'var(--foreground)',
        backgroundColor: 'transparent',
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        opacity: 0.32,
      },
      false: {
        pointerEvents: 'auto',
        opacity: 1,
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'md',
    shape: 'fill',
    stretch: false,
    disabled: false,
  },
});

function generateButtonColors(color: TColor) {
  const foreground = color === 'secondary'
    ? 'var(--foreground-secondary-on-transparent)'
    : 'var(--foreground-accent)';

  return {
    [themeColorVar]: `var(--colors-${color})`,
    [themeForegroundVar]: foreground,
    ...generateColors(color),
  };
}

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>; 