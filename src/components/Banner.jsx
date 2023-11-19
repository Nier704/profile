import { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react';

const Banner = () => {

  const [topMargin, setTopMargin] = useState('-500px');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTopMargin('100px');
      setOpacity(1);
    }, 200);
  }, []);

  return (
    <div
      className='
        banner
        w-screen
        h-[375px]
        flex
        justify-center
        items-center
      '
    >
      <div
        style={{
          marginTop: `${topMargin}`,
          opacity: opacity
        }}
        className='hide glitchFont'>
        Nier
      </div>
    </div>
  )
}

export default Banner