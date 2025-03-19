import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function getWindowDimensions() {
  const isClient = typeof window === 'object';

  if (!isClient) {
    return { width: 0, height: 0 };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
}

const handleWindowResize = (
  setWidth: Dispatch<SetStateAction<number>>,
  setHeight: Dispatch<SetStateAction<number>>,
) => {
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
};

export const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const isClient = typeof window === 'object';

  const handle = () => {
    handleWindowResize(setWidth, setHeight);
  };

  useEffect(() => {
    if (!isClient) {
      return;
    }
    // component is mounted and window is available
    handle();
    window.addEventListener('resize', handle);
    // unsubscribe from the event on component unmount
    return () => {
      window.removeEventListener('resize', handle);
    };
  }, [isClient]);

  return { width, height };
};

export const useFavicon = (iconUrl: string) => {
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") || document.createElement('link');

    link.rel = 'icon';
    link.href = iconUrl;
    link.type = 'image/png';

    document.head.appendChild(link);
  }, [iconUrl]);
};
