// ─── Shared Module Public API ───────────────────────────────────────────────
// This is the ONLY entry point other modules should import from.
// Never import directly from sub-paths (e.g. @/modules/shared/components/ui/Button).

// Providers
export { LanguageProvider, useLanguage } from './providers/LanguageProvider';
export { ThemeProvider } from './providers/ThemeProvider';

// Hooks
export { useLanguage as useI18n } from './hooks/useLanguage';

// Layout components
export { default as Navbar } from './components/layout/Navbar';
export { default as Footer } from './components/layout/Footer';
export { default as BackgroundKinetic } from './components/layout/BackgroundKinetic';
export { default as IntroLoader } from './components/layout/IntroLoader';

// UI components
export { default as Button } from './components/ui/Button';
export { default as Input } from './components/ui/Input';
export { default as Modal } from './components/ui/Modal';
export { default as ScrollProgress } from './components/ui/ScrollProgress';
export { default as SuppressWarnings } from './components/ui/SuppressWarnings';
export { default as ThemeToggle } from './components/ui/ThemeToggle';

// Animations
export { default as DecryptedText } from './animations/DecryptedText';
export { default as SplitText } from './animations/SplitText';
export { default as SpotlightCard } from './animations/SpotlightCard';
export { default as TrueFocus } from './animations/TrueFocus';

// Types
export type { PaginationMeta, ApiResponse, Theme } from './types';
