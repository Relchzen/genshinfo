import Image from "next/image";
import styles from "../../styles/about.module.css"

export default function IntroAboutUs(props){
    return(
        <div className={styles.introAboutUs}>
            <div className={styles.introText}>
                <h1>Who We Are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit est nam aperiam ipsam maiores obcaecati cumque aut nulla ipsa, architecto, eaque quia incidunt aliquid debitis fuga perferendis illum magnam alias.</p>
            </div>
            <div className={styles.introImg}>
                <Image src={props.img} className={styles.introgmbr} alt="Gambar" />
            </div>
        </div>
    );
}