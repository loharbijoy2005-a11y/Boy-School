'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '../translations/en';
import { bn } from '../translations/bn';

export type Lang = 'en' | 'bn';

interface LanguageContextType {
  currentLang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Lang>('en');

  const t = (key: string): string => {
    const dict = currentLang === 'bn' ? bn : en;
    const keys = key.split('.');
    let val: any = dict;
    for (const k of keys) {
      val = val?.[k];
    }
    return typeof val === 'string' ? val : key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLang: setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
