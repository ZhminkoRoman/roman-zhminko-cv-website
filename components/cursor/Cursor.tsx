import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const animateCursor = (event: MouseEvent) => {
    event.preventDefault();
    if (cursorRef?.current) {
      cursorRef.current.style.left = `${event.pageX - 30}px`;
      cursorRef.current.style.top = `${event.pageY - 30}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', animateCursor);
    return () => {
      window.removeEventListener('mousemove', animateCursor);
    };
  }, []);

  return (
    <div
      className="w-16 shadow-cursor translate-cursor border border-[#0000001a] backdrop-blur-sm bg-[#ffffff0d] absolute rounded-full aspect-square z-10"
      ref={cursorRef}
    ></div>
  );
};

export default Cursor;
