import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Box } from "@chakra-ui/react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.paral');
      const scroll = window.pageYOffset;
      console.log('hi');
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

  return (
    <Box className={styles.container} minW="container.md" width="100%">
      <div className={styles.banner}>
        <img className={`paral ${styles.liyue}`} data-speed="0.2" src="https://genshin.global/wp-content/uploads/2023/02/hutao-yelan-xiao-lantern-rite-2023-official-wallpaper-genshin.jpg" alt="Liyue"></img>

        <h1 className={`${styles.welcomeTitle} ${styles.paral}`} data-speed="0.3">GENSHINFO</h1>

        <button href='.page1' className={styles.btn} type="button">
          <strong className={styles.strong}>Get Started</strong>
          <div className={styles.containerstars}>
            <div className={styles.stars}></div>
          </div>

          <div className='glow'>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </button>


        <div className={`paral ${styles.backgroundBox}`} data-speed="0.4"></div>

        <div className={styles.page1}></div>
      </div>
    </Box>

  )
}
