import React, { useRef, useEffect, useState } from 'react';
import rock from '../assests/rock.png';
import scissor from '../assests/scissor.png';
import paper from '../assests/paper.png';

export default function Canvas(props) {
  const [showPrompt, setShowPrompt] = useState(true);
  const [userIp, setUserIp]= useState('')
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    //Our first draw
    canvas.style.background = 'brown';
    canvas.style.cursor = 'pointer';
    canvas.width = '500';
    canvas.height = '400';

    //heading
    ctx.font = '30px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText('Please choose anyone option.', 50, 50);

    ctx.font = '30px Arial';
    ctx.fillStyle = 'yellow';
    // ctx.fillText('X', 460, 37);

    let rockImage = new Image();
    let paperImage = new Image();
    let scissorImage = new Image();

    showImage();
    function showImage() {
      rockImage.src = rock;
      rockImage.id = 'imgRock';
      console.log(rockImage.src);
      rockImage.onload = function () {
        ctx.drawImage(rockImage, 10, 150, 150, 150);
      };

      paperImage.src = paper;
      console.log(paperImage.src);
      paperImage.onload = function () {
        ctx.drawImage(paperImage, 180, 150, 150, 150);
      };

      scissorImage.src = scissor;
      console.log(scissorImage.src);
      scissorImage.onload = function () {
        ctx.drawImage(scissorImage, 340, 150, 150, 150);
      };
    }
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (y > 155 && y < 305) {
        const options = ['rock', 'paper', 'scissors'];
        props.compChoice(options[Math.floor(Math.random() * options.length)]);

        if (x > 10 && x < 158) {
          console.log(rect);
          console.log('click..', x, 'y: ', y);
          props.userChoice(options[0]);
          // props.status(false)
        } else if (x > 190 && x < 315) {
          console.log(rect);
          console.log('click.2.', x, 'y: ', y);
          props.userChoice(options[1]);
          // props.status(false)

        } else if (x > 354 && x < 470) {
          console.log(rect);
          console.log('click.3.', x, 'y: ', y);
          props.userChoice(options[2]);
          // props.status(false)

        }

      }

    });
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        {...props}
        id="canvasId"
        className="canvas__container"
      />
    </>
  );
}