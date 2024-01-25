import React, { useState, useEffect } from 'react';

const Timer = ({ initialMinutes, initialSeconds }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div>
      <p>{`${minutes < 10 ? '0' : ''}${minutes} : ${
        seconds < 10 ? '0' : ''
      }${seconds}`}</p>
    </div>
  );
};

export default Timer;
