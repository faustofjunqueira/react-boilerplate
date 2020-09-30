import React, {createContext, useState} from 'react';
import { i18nServices } from '../../services/i18n';

export interface I18nStore {
  action: {
    changeLang: (lang: string) => void;
  }
  data: {
    lang?: any;
  }
}

export const I18nContext = createContext({});

export const I18nProvider: React.FC = ({children}) => {

  const [lang, setLang] = useState<any>();

  const value: I18nStore = {
    action: {
      changeLang: (lang: string) =>  setLang(i18nServices.setLang(lang))
    },
    data: {
      lang
    }
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}
