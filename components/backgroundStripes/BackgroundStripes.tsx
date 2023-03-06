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
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

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
          // ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.moveTo(0, imageCellArray[i].y);
          ctx.lineTo(canvas.width, imageCellArray[i].y);
          ctx.stroke();
          // ctx.restore();
        }
        // const noiseInterval = setInterval(() => {
        //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        //   for (let i = 0; i < imageCellArray.length; i++) {
        //     const value = randomIntFromInterval(1, 20);
        //     if (value === 1) {
        //       ctx.save();
        //       ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        //       ctx.fillRect(imageCellArray[i].x, imageCellArray[i].y, 10, 10);
        //       ctx.restore();
        //     }
        //   }
        // }, 50);
        // return () => {
        //   ctx.clearRect(0, 0, canvas.width, canvas.height);
        //   clearInterval(noiseInterval);
        // };
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute" />;
};

export default BackgroundStripes;
