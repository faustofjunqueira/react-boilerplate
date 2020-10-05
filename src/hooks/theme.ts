import { useContext } from 'react';
import { AntdContext } from '../components/antd/AntdConfigProvider';

export const useTheme = () => {
  const antdStore = useContext(AntdContext);

  return {
    theme: antdStore.theme,
    setTheme: antdStore.setTheme
  }
}
