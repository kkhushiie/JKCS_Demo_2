import './Text.css';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Text = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    

    const handleAnimations = () => {
      gsap.utils.toArray('.revealUp').forEach(function (elem) {
        ScrollTrigger.create({
          trigger: elem,
          // markers: true,
          onEnter: function () {
            gsap.fromTo(
              elem,
              { y: 100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: 'back',
                overwrite: 'auto',
              }
            );
          },
          onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: 'auto' });
          },
          onEnterBack: function () {
            gsap.fromTo(
              elem,
              { y: -100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: 'back',
                overwrite: 'auto',
              }
            );
          },
          onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: 'auto' });
          },
        });
      });
    };
    handleAnimations();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  return (
    <div className='mainbody'>

    <div className='body'>
      <div className="section bg2">
        <h1 id='fancy' className="revealUp">We assure customer satisfaction</h1>
      </div>
      <div className="section bg1">
        <h1 id='fancy' className="revealUp">We fulfil customer needs</h1>
      </div>
      <div className="section bg2">
        <h1 id='fancy' className="revealUp">We are reliable</h1>
      </div> 
    </div>
    </div>

  );
};
export default Text;   