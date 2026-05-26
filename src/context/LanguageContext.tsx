import React, { createContext, useContext, useState, useEffect } from 'react';
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

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    // Add dynamic document attributes for SEO and screen readers
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
