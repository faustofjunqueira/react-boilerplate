import { ConfigProvider } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AntdCfg } from '../../config/antd';
import enUS from 'antd/es/locale/en_US';
import ptBR from 'antd/es/locale/pt_BR';
import { Locale } from 'antd/es/locale-provider';

function getLocaleByName(locname: string): Locale | null {
  switch(locname) {
    case "en": return enUS;
    case "pt": return ptBR;
    default: return null;
  }
}

export const AntdConfigProvider: React.FC = ({children}) => {
  const {t} = useTranslation();

  const lang = t('lang');
  const locale = getLocaleByName(lang);

  return (
    <ConfigProvider locale={locale || undefined} {...AntdCfg.configProviderConfig}>
      {children}
    </ConfigProvider>
  );
}
