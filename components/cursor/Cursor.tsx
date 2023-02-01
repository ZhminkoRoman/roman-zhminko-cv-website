import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const animateCursor = (event: MouseEvent) => {
    if (cursorRef?.current) {
      cursorRef.current.style.left = `${event.pageX}px`;
      cursorRef.current.style.top = `${event.pageY}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', animateCursor);
    return () => {
      window.removeEventListener('mousemove', animateCursor);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
