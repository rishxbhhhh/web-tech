import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const DeleteFlipCard = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      onClick={() => set(state => !state)}
      style={{
        padding: '50vh',
        background: 'pink',
        height: '20vh',
        width: '50vh',
      }}
    >
      <a.div
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          background: 'orange',
        }}
      >
        Delete Account
      </a.div>
      <a.div
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          background: 'red',
        }}
      >
        <Button variant="filled">Delete</Button>
      </a.div>
    </div>
  );
};

export default DeleteFlipCard;
