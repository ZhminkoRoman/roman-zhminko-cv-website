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
        const drawWhiteNoise = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < 220; i++) {
            for (let j = 0; j < 220; j++) {
              const randomRectSize = Math.floor(Math.random() * 15);
              ctx.beginPath();
              ctx.fillRect(
                Math.random() * 10000,
                Math.random() * 10000,
                randomRectSize,
                randomRectSize
              );
              ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
              ctx.closePath();
            }
          }
        };
        const drawBlueNoise = () => {
          // ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < 220; i++) {
            for (let j = 0; j < 220; j++) {
              const randomRectSize = Math.floor(Math.random() * 15);
              ctx.beginPath();
              ctx.fillRect(
                Math.random() * 10000,
                Math.random() * 10000,
                randomRectSize,
                randomRectSize
              );
              ctx.fillStyle = `rgba(150, 150, 150, 0.5)`;
              ctx.closePath();
            }
          }
        };
        const drawBlueNoiseTwo = () => {
          // ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < 220; i++) {
            for (let j = 0; j < 220; j++) {
              const randomRectSize = Math.floor(Math.random() * 15);
              ctx.beginPath();
              ctx.fillRect(
                Math.random() * 10000,
                Math.random() * 10000,
                randomRectSize,
                randomRectSize
              );
              ctx.fillStyle = `rgba(93, 160, 222, 0.5)`;
              ctx.closePath();
            }
          }
        };
        const drawBlueNoiseThree = () => {
          // ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < 220; i++) {
            for (let j = 0; j < 220; j++) {
              const randomRectSize = Math.floor(Math.random() * 15);
              ctx.beginPath();
              ctx.fillRect(
                Math.random() * 10000,
                Math.random() * 10000,
                randomRectSize,
                randomRectSize
              );
              ctx.fillStyle = `rgba(200, 200, 200, 0.8)`;
              ctx.closePath();
            }
          }
        };
        const noiseInterval = setInterval(() => {
          drawWhiteNoise();
          drawBlueNoise();
          drawBlueNoiseTwo();
          drawBlueNoiseThree();
        }, 50);
        return () => clearInterval(noiseInterval);
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="blur-[2px] absolute" />;
};

export default Canvas;
