import { useEffect, useRef } from 'react';

// Props width and height should be sent and use

interface ICell {
  x: number;
  y: number;
  color: string;
}

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Canvas = () => {
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
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const scanImage = (cellSize: number) => {
          for (let y = 0; y < pixels.height; y += cellSize) {
            for (let x = 0; x < pixels.width; x += cellSize) {
              const posX = x * 4;
              const posY = y * 4;
              const pos = posY * pixels.width + posX;

              if (pixels.data[pos + 3] > 128) {
                const red = pixels.data[pos];
                const green = pixels.data[pos + 1];
                const blue = pixels.data[pos + 2];
                const color = `rgb(${red}, ${green}, ${blue})`;
                imageCellArray.push({ x, y, color });
              }
            }
          }
        };
        scanImage(10);
        const noiseInterval = setInterval(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < imageCellArray.length; i++) {
            const value = randomIntFromInterval(1, 20);
            if (value === 1) {
              ctx.save();
              ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
              ctx.fillRect(imageCellArray[i].x, imageCellArray[i].y, 10, 10);
              ctx.restore();
            }
          }
        }, 50);
        return () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          clearInterval(noiseInterval);
        };
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="blur-[4px] absolute" />;
};

export default Canvas;
