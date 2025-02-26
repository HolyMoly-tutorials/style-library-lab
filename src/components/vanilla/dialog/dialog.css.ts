import { recipe } from '@vanilla-extract/recipes';
import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const dialogRecipe = recipe({
  base: {
    overlay: style({
      position: 'fixed',
      inset: 0,
      animation: `${fadeIn} 0.2s ease-out`,
    }),
    content: style({
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      maxHeight: '85vh',
      animation: `${contentShow} 0.2s ease-out`,
    }),
    title: style({
      marginBottom: '16px',
      fontWeight: 600,
    }),
    description: style({
      marginBottom: '20px',
    }),
    closeButton: style({
      position: 'absolute',
      top: '16px',
      right: '16px',
      padding: '8px',
      borderRadius: '9999px',
      cursor: 'pointer',
    }),
  },
  variants: {
    variant: {
      primary: {
        overlay: style({ backgroundColor: 'rgba(0, 0, 0, 0.4)' }),
        content: style({
          backgroundColor: 'white',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }),
        title: style({ color: '#111827' }),
        description: style({ color: '#4B5563' }),
        closeButton: style({
          color: '#6B7280',
          ':hover': { backgroundColor: '#F3F4F6' },
        }),
      },
      secondary: {
        overlay: style({ backgroundColor: 'rgba(0, 0, 0, 0.25)' }),
        content: style({
          backgroundColor: '#F9FAFB',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        }),
        title: style({ color: '#1F2937' }),
        description: style({ color: '#6B7280' }),
        closeButton: style({
          color: '#9CA3AF',
          ':hover': { backgroundColor: '#E5E7EB' },
        }),
      },
    },
    size: {
      small: {
        content: style({
          maxWidth: '400px',
          padding: '16px',
        }),
        title: style({ fontSize: '18px' }),
        description: style({ fontSize: '14px' }),
      },
      medium: {
        content: style({
          maxWidth: '500px',
          padding: '24px',
        }),
        title: style({ fontSize: '20px' }),
        description: style({ fontSize: '16px' }),
      },
      large: {
        content: style({
          maxWidth: '600px',
          padding: '32px',
        }),
        title: style({ fontSize: '24px' }),
        description: style({ fontSize: '18px' }),
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
}); 