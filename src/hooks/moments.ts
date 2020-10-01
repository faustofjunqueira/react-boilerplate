import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import moment from 'moment';

export const useMoments = (inp?: moment.MomentInput, format?: moment.MomentFormatSpecification) => {
  const {t} = useTranslation();
  useEffect(() => {
    moment.locale(t('moment.locale'));
  }, [t]);

  return moment(inp, format, t('moment.locale') as string);
}
