'use client';

import React, { useEffect } from 'react';

import layerBase from '../../../public/Dungeon/layer-base.png';
import layerMiddle from '../../../public/Dungeon/layer-middle.png';
import layerFront from '../../../public/Dungeon/layer-front.png';
import dungeon from '../../../public/Dungeon/dungeon.jpg';

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
    <div className="wrapper">
      <div className="content">
        <header className="main-header">
          <div className="layers">
            <div className="layer__header">
              <div className="layers__caption">Welcome to Parallax</div>
              <div className="layers__title">Fairy Forest</div>
            </div>
            <div
              className="layer layers__base"
              style={{ backgroundImage: `url(${layerBase.src})` }}
            ></div>
            <div
              className="layer layers__middle"
              style={{ backgroundImage: `url(${layerMiddle.src})` }}
            ></div>
            <div
              className="layer layers__front"
              style={{ backgroundImage: `url(${layerFront.src})` }}
            ></div>
          </div>
        </header>

        <article className="main-article" style={{ backgroundImage: `url(${dungeon.src})` }}>
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
