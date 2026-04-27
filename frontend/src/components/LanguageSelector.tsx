import { useTranslation } from 'react-i18next';
import { Icon } from '@stellar/design-system';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    void i18n.changeLanguage(nextLang);
  };

  const currentLang = i18n.language === 'en' ? 'English' : 'Español';
  const nextLang = i18n.language === 'en' ? 'Español' : 'English';

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg glass border-hi hover:bg-white/5 active:scale-95 transition-all outline-none focus:outline-none focus:ring-2 focus:ring-accent/50 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text min-h-[44px]"
      title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      aria-label={`Change language to ${nextLang}. Current language: ${currentLang}`}
    >
      <Icon.Globe01 size="sm" aria-hidden="true" />
      <span aria-hidden="true">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
      <span className="sr-only">{currentLang}</span>
    </button>
  );
};
