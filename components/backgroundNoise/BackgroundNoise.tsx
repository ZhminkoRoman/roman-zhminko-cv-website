import { useEffect, useRef } from 'react';

// interface ICanvasProps {
//   width: number;
//   height: number;
// }

// Props width and height should be sent and use

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;

      canvas.width = document.body.clientWidth; //document.width is obsolete
      canvas.height = document.body.clientHeight; //document.height is obsolete

      if (ctx) {
        const drawNoise = (color: string, clear?: boolean) => {
          if (clear) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
          for (let i = 0; i < 200; i++) {
            for (let j = 0; j < 200; j++) {
              ctx.beginPath();
              ctx.fillRect(Math.random() * 10000, Math.random() * 10000, 7, 7);
              ctx.fillStyle = color;
              ctx.closePath();
            }
          }
        };
        const noiseInterval = setInterval(() => {
          // drawNoise(`rgba(255, 255, 255, 0.2)`, true);
          // drawNoise(`rgba(200, 200, 200, 0.2)`);
          // drawNoise(`rgb(24%, 31%, 80%, 0.2)`);
          // drawNoise(`rgba(160, 209, 254, 0.2)`);
          // drawNoise(`rgb(42%, 81%, 100%, 0.3)`);
        }, 50);
        return () => clearInterval(noiseInterval);
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="blur-[4px] absolute" />;
};

export default Canvas;
