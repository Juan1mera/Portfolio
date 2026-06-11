import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { translations } from '../constants/translations';
import type { Language, TranslationsSchema } from '../constants/translations';


interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationsSchema;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null;
    if (stored === 'en' || stored === 'es' || stored === 'ru') return stored;

    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === 'ru') return 'ru';
    if (browserLang === 'es') return 'es';
    return 'en'; // default fallback
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }, []);

  useEffect(() => {
    // Add dynamic document attributes for SEO and screen readers
    document.documentElement.lang = language;
  }, [language]);

  // Memoizar el value evita re-renders de todos los consumidores en cada render del provider
  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
