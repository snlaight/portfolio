'use client';

import { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';

import { IDeveloperIconProps } from '@/utils/interfaces/props';

const DeveloperIcon = ({ icon } : IDeveloperIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: icon,
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <div ref={ref} />
  );
};

export default DeveloperIcon;
