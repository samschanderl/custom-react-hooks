import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
    // when you need window width and height
    // const [size, setSize] = useState([0, 0]);

    // when you only need window width
    const [width, setWidth] = useState();

    useLayoutEffect(() => {
      const updateWidth = () => {
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth)
    }, []);

    // when returning only width
    return width;

    // when returning width and height
    // return size
  }
