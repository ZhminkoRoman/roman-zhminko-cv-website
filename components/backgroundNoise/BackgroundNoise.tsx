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
      if (ctx) {
        // ctx.fillStyle = '#111111';
        // ctx.fillRect(0, 0, 500, 500);

        for (let i = 0; i < 60; i++) {
          for (let j = 0; j < 60; j++) {
            ctx.beginPath();
            ctx.fillStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(
              255 - 42.5 * j
            )})`;
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
            ctx.fill();
          }
        }

        // for (let i = 0; i < 4; i++) {
        //   for (let j = 0; j < 3; j++) {
        //     const circle = new Path2D();
        //     ctx.beginPath();
        //     ctx.fillStyle = '#fff';
        //     const x = 25 + j * 50; // x coordinate
        //     const y = 25 + i * 50; // y coordinate
        //     const radius = 20; // Arc radius
        //     const startAngle = 0; // Starting point on circle
        //     const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        //     const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

        //     circle.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        //     ctx.fill(circle);
        //   }
        // }
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={288} height={480} />;
};

export default Canvas;
