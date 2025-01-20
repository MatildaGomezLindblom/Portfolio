import { useState, useEffect } from "react";
import Avatar from '../assets/avatarAnimation.png';

const LoadingAvatar = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const frames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; // Same frames from original

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 60); 

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div
      style={{
        width: "380px",
        height: "480px",
        backgroundImage: `url(${Avatar})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${-415 * frameIndex}px 0`, 
        scale: "0.4",
        marginLeft: "-20px"
      }}
    />
  );
};

export default LoadingAvatar;
