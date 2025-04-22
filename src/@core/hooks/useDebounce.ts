import { useEffect, useState } from 'react';

export const useDebounce = <T>(changedValue: T, delayTime: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(changedValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(changedValue);
    }, delayTime);

    return () => clearTimeout(timeout);
  }, [changedValue]);

  return debouncedValue;
};
