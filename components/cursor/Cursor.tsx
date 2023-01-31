import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const animateCursor = (event: MouseEvent) => {
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
      className="w-12 shadow-[0_0_15px_#00000033] border border-[#0000005c] bg-[#ffffff0d] duration-200 ease-out absolute rounded-full h-12 pointer-events-none"
      ref={cursorRef}
    ></div>
  );
};

export default Cursor;
