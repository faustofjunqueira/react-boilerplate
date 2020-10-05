import { useEffect, useState } from "react";

export interface PromiseData<T> {
  loading: boolean;
  error: any;
  data?: T
}

export const usePromise = <T>(promise?: () => Promise<T>): PromiseData<T> => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState<T>();
  const [error, seterror] = useState<T>();

  useEffect(() => {
    if(promise) {
      promise().then(setdata, seterror).then(() => setloading(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, data, error};
}
