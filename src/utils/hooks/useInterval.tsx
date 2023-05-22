import { useState, useEffect } from 'react';

type IntervalProps = {
  data: Record<string, any>[];
  intervalTime: number;
};

const useInterval = ({ data, intervalTime }: IntervalProps) => {
  const [currentData, setCurrentData] = useState(data[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = data.indexOf(currentData);
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentData(data[nextIndex]);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentData, data, intervalTime]);

  return currentData;
};

export default useInterval;
