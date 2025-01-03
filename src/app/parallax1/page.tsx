'use client';

import React, { useEffect } from 'react';

import letter from '../../../public/Paralax/Partners/partners_letter.png';
import second from '../../../public/Paralax/Partners/partners_second.png';
import front from '../../../public/Paralax/Partners/partners_front.png';

import './style.css';

export default function Page() {
  useEffect(() => {
    const onScroll = () =>
      document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="wrapper max-w-full">
      <div className="content">
        <header className="main-header">
          <div className="layers">
            <div className="layer__header">
              <div className="layers__caption">Партнеры</div>
              <div className="layers__title">
                Если Вы заинтересованы в том, чтобы стать партнером или спонсором, пожалуйста,
                свяжитесь с нами
              </div>
            </div>
            <div
              className="layer layers__base"
              style={{ backgroundImage: `url(${letter.src})` }}
            ></div>
            <div
              className="layer layers__middle"
              style={{ backgroundImage: `url(${second.src})` }}
            ></div>
            <div
              className="layer layers__front"
              style={{ backgroundImage: `url(${front.src})` }}
            ></div>
          </div>
        </header>

        <article className="main-article" style={{ backgroundImage: `url(${front.src})` }}>
          <div className="main-article__content">
            <h2 className="main-article__header">To be continued</h2>
            <p className="main-article__paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing error error provident dignissimos
              facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus
              corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!
            </p>
          </div>
          <div className="copy">© WebDesign Master</div>
        </article>
      </div>
    </div>
  );
}
