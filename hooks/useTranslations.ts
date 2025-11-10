

import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
// FIX: Changed import to be a correct relative path.
import { translations } from '../data/translations';

const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  const { language } = context;

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        console.warn(`Translation key not found: ${key}`);
        // Fallback to Spanish
        let fallbackResult: any = translations['es'];
        for (const fk of keys) {
            fallbackResult = fallbackResult?.[fk];
            if (fallbackResult === undefined) return key;
        }
        return fallbackResult;
      }
    }
    return result;
  };

  return { t, setLanguage: context.setLanguage, language: context.language };
};

export default useTranslations;