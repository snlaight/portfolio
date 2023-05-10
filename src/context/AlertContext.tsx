import { createContext, FC, useState, useCallback, useMemo } from 'react';

import { TAlertContext, AlertProps } from '@/utils/types';

export const AlertContext = createContext<Partial<TAlertContext>>({});

type Props = {
  children: React.ReactNode;
};

export const AlertProvider: FC<Props> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const handleAlert = useCallback((alert: AlertProps) => {
    setAlerts((prev) => [...prev, alert]);
    setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 5000);
  }, []);

  const memoizedAlerts = useMemo(() => ({ handleAlert, alerts }), [alerts, handleAlert]);

  return (
    <AlertContext.Provider value={memoizedAlerts}>
      {children}
    </AlertContext.Provider>
  );
};
