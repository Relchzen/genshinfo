import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Box } from "@chakra-ui/react";
import Image from 'next/image';
import logo from '../public/src/logoGenshin.png'
import cloud from '../public/src/cloudFix1.png';//shadow
import bg1 from '../public/src/bg1.jpg';
import Contacts from './contact';
import CardHome from './components/CardHome';
import CardList from './CardList';
import { useRouter } from 'next/router';




export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.paral');
      const scroll = window.pageYOffset;
      console.log('Love me Love me say that YOU LOVE ME');
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

          <div className={styles.glow}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </button>

        <Image className={`paral ${styles.backgroundBoxShadow}`} src={cloud} data-speed="0.3" />
      </div>

      <div id='page1' className={styles.page1}>
        <h2>GenshInfo gives the information you need</h2>
        <h4>Choose what you need!</h4>
        <div className={styles.cardGetStarted}>
          {CardList.map((kartuName) => (
              <CardHome
              cardName = {kartuName.cardName}
              />
          ))}
        </div>
        <h3>Game Updates</h3>
        <div className={styles.gameUpdate}>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsm5Bh7TBzZlCNsPQyY80Tn8V_-hT1zV5cqg&usqp=CAU'></img>
            <img src='https://scontent.fcgk3-3.fna.fbcdn.net/v/t39.30808-6/237101041_151326013805983_3649414793982746123_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFAjlYMDMopvL_Rnf5ex3WeZ7vmZe6PEbFnu-Zl7o8RsfCQTjcdEq46SeZujbL6-iLNYHxI6ib8HC1drXKc04BU&_nc_ohc=15q5hw7gEw8AX-yry-3&_nc_zt=23&_nc_ht=scontent.fcgk3-3.fna&oh=00_AfApwP3IxZPKr70Wn2UPLltfPlv5o7DsrV9Q6dpLPq4UDA&oe=64737304'></img>
            <img src='https://i.ytimg.com/vi/Bke_Zz2KeXY/maxresdefault.jpg'></img>

          </div>
        </div>
        <h3>Teyvat News</h3>
        <div className={styles.memeUpdate}>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsm5Bh7TBzZlCNsPQyY80Tn8V_-hT1zV5cqg&usqp=CAU'></img>
            <img src='https://scontent.fcgk3-3.fna.fbcdn.net/v/t39.30808-6/237101041_151326013805983_3649414793982746123_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFAjlYMDMopvL_Rnf5ex3WeZ7vmZe6PEbFnu-Zl7o8RsfCQTjcdEq46SeZujbL6-iLNYHxI6ib8HC1drXKc04BU&_nc_ohc=15q5hw7gEw8AX-yry-3&_nc_zt=23&_nc_ht=scontent.fcgk3-3.fna&oh=00_AfApwP3IxZPKr70Wn2UPLltfPlv5o7DsrV9Q6dpLPq4UDA&oe=64737304'></img>
            <img src='https://i.ytimg.com/vi/Bke_Zz2KeXY/maxresdefault.jpg'></img>
          </div>
        </div>
      </div>
    </Box>
  )
}
