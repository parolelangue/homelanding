import { useEffect, useState } from 'react';

export const useGetZoom = () => {
  const [zoom, setZoom] = useState<number>(Math.round(window.devicePixelRatio * 100));

  useEffect(() => {
    const _onResize = () => {
      const newZoom = Math.round(window.devicePixelRatio * 100);
      if (newZoom !== zoom) {
        setZoom(newZoom);
      }
    };
    window.addEventListener('resize', _onResize);

    return () => {
      window.removeEventListener('resize', _onResize);
    };
  }, []);

  return zoom;
};
