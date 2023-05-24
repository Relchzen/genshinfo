import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Box } from "@chakra-ui/react";
import Image from 'next/image';
import logo from '../public/src/logo.png'
import cloud from '../public/src/cloud.png';
import bg1 from '../public/src/bg1.jpg';
import bg2 from '../public/src/bg2.jpg';

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
        <Image className={`paral ${styles.liyue}`} data-speed="-0.1" src={bg1} alt="" />

        <Image className={`paral ${styles.welcomeTitle}`} src={logo} data-speed="0.4" />

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

        <Image className={`paral ${styles.backgroundBoxShadow}`} src={cloud} data-speed="0.5" />
        <Image className={`paral ${styles.backgroundBox}`} src={cloud} data-speed="0.5" />
      </div>

      <div id='page1' className={styles.page1}>
        <h2>Genshinfo gives the information you need</h2>
        <div className={styles.gameUpdate}>
          <h3>Game Updates</h3>
          <div>

          </div>
        </div>
        <div className={styles.memeUpdate}>
          <h3>Teyvat News</h3>
          <div>

          </div>
        </div>
      </div>
      <Box className={styles.container} minW="container.md" width="100%">
        <div className={styles.banner}>
          {/* Banner content */}
        </div>

        <div id="page1" className={styles.page1}>
          {/* Page 1 content */}
        </div>

        <footer className={styles.footer}>
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </footer>
      </Box>
    </Box>
  )
}
