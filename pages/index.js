import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Box } from "@chakra-ui/react";
import Parallax from './components/parallax';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.paral');
      const scroll = window.pageYOffset;
      console.log('hello its a me mario');
      elements.forEach(element => {
        const speed = parseFloat(element.dataset.speed);
        element.style.transform = `translateY(-${scroll * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPage1 = () => {
    const page1Element = document.getElementById('page1');
    if (page1Element) {
      window.scrollTo({
        top: page1Element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box className={styles.container} minW="container.md" width="100%">
      <div className={styles.banner}>
        <img className={`paral ${styles.liyue}`} data-speed="0.2" src="https://genshin.global/wp-content/uploads/2023/02/hutao-yelan-xiao-lantern-rite-2023-official-wallpaper-genshin.jpg" alt="Liyue"></img>

        <h1 className={`paral ${styles.welcomeTitle}`} data-speed="0.3">Genshinfo</h1>

        <button className={`paral ${styles.btn}`} data-speed="0.3" type="button" onClick={scrollToPage1}>
          <strong className={styles.strong}>Get Started</strong>
          <div className={styles.containerstars}>
            <div className={styles.stars}></div>
          </div>

          <div className='glow'>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </button>

        <div className={`paral ${styles.backgroundBox}`} data-speed="0.5"></div>
      </div>

      <div id='page1' className={styles.page1}>
        <h2>Genshinfo gives the information you need</h2>
        <div className={styles.carding}>
          <Parallax></Parallax>
          <Parallax></Parallax>
          <Parallax></Parallax>
          <Parallax></Parallax>
          <Parallax></Parallax>
        </div>
      </div>
    </Box>
  )
}
