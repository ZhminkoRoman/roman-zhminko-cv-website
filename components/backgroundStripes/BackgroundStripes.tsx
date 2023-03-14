import { useEffect, useRef } from 'react';

// Props width and height should be sent and use

interface ICell {
  y: number;
}

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const BackgroundStripes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const imageCellArray: ICell[] = [];

      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;

      canvas.width = document.body.clientWidth; //document.width is obsolete
      canvas.height = document.body.clientHeight; //document.height is obsolete

      if (ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const scanImage = (cellSize: number) => {
          for (let y = 0; y < pixels.height; y += cellSize) {
            imageCellArray.push({ y });
          }
        };
        scanImage(10);
        for (let i = 0; i < imageCellArray.length; i++) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.moveTo(0, imageCellArray[i].y);
          ctx.lineTo(canvas.width, imageCellArray[i].y);
          ctx.stroke();
        }
        return () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="blur-[0.5px] absolute" />;
};

export default BackgroundStripes;
