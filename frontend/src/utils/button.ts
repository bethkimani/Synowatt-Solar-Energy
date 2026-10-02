export type ButtonVariant = 'primary' | 'green' | 'outline' | 'light' | 'white';
export type ButtonSize = 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[transform,background-color,box-shadow,color,border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-ink shadow-sm hover:bg-gold hover:shadow-lg hover:shadow-accent/25',
  green: 'bg-brand-dark text-white hover:bg-brand-deep hover:shadow-lg hover:shadow-brand/20',
  outline: 'border border-ink/15 bg-white text-ink hover:border-brand-dark hover:text-brand-dark',
  light: 'border border-white/50 text-white hover:bg-white hover:text-ink',
  white: 'bg-white text-brand-deep hover:bg-brand-tint hover:shadow-lg'
};

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-[52px] px-7 text-[15px]'
};

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md'): string {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}