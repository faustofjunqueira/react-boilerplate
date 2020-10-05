import { ConfigProvider } from 'antd';
import { Locale } from 'antd/es/locale-provider';
import enUS from 'antd/es/locale/en_US';
import ptBR from 'antd/es/locale/pt_BR';
import React, { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AntdCfg } from '../../config/antd';

function getLocaleByName(locname: string): Locale | null {
  switch(locname) {
    case "en": return enUS;
    case "pt": return ptBR;
    default: return null;
  }
}

export interface IAntDesignStore {
  theme: 'light' | 'dark',
  setTheme: (theme: 'light' | 'dark') => void
}

export const AntdContext = createContext({}) as any as React.Context<IAntDesignStore>;
export const AntdConfigProvider: React.FC = ({children}) => {
  const {t} = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const locale = getLocaleByName(t('lang'));

  const value: IAntDesignStore = {
    theme,
    setTheme(theme: 'light' | 'dark') {
      setTheme(theme)
    }
  }

  return (
    <ConfigProvider locale={locale || undefined} {...AntdCfg.configProviderConfig}>
      <AntdContext.Provider value={value}>
        {children}
      </AntdContext.Provider>
    </ConfigProvider>
  );
}
