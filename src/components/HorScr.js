import './HorScr.css';
import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import Image from 'mui-image';
const HorScr = () => {
  useEffect(() => {
    const setStickyContainersSize = () => {
      document.querySelectorAll('.sticky-container').forEach(function (container) {
        const stikyContainerHeight = container.querySelector('main').scrollWidth;
        container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
      });
    };
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    };
    const wheelHandler = (evt) => {
      const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
        return isElementInViewport(container);
      })[0];
      if (!containerInViewPort) {
        return;
      }
      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;
      if (g_canScrollHorizontally) {
        containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
      }
    };
    const init = () => {
      setStickyContainersSize();
      bindEvents();
    };
    const bindEvents = () => {
      window.addEventListener('wheel', wheelHandler);
    };
    init();
    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  return (
    <div>
      <div className="vertical-section">
      <Typography variant="h4" style={{fontSize: '45px', marginTop:"50px", fontWeight: 'bold', color: 'Black', textAlign: 'center',
       textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)'}} gutterBottom>
      Try Sizzling Indian Taste</Typography>
      </div>
      <div className="sticky-container">
        <main>
          <section >
            <h1  className='h1'>South Indian</h1>
            </section>
          <section>
          <Image width={'100vh'} height={'50vh'} src='https://img.freepik.com/premium-psd/3d-website-settings-icon-with-transparent-background_754950-92.jpg?w=1000'/>
          </section>
          <section>
            <h1 className='h1'>Indian Streetz</h1>
          </section>
          <section>
          <Image src='https://www.pngplay.com/wp-content/uploads/15/Chinese-Food-Transparent-PNG.png'/>
          </section>
          <section>
            <h1 className='h1'>Eat Delicious</h1>
          </section>
          <section>
          <Image src='https://www.pngplay.com/wp-content/uploads/15/Chinese-Food-Transparent-PNG.png'/>
          </section>
        </main>
      </div>
      <div className="vertical-section">
       
      </div> 
    </div>
  );
};
export default HorScr;