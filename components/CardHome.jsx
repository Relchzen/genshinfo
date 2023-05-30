import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function CardHome (props){

    const router = useRouter();

    const redirectToPage = () => {
      router.push('../characters');
    }
    return (
        <div onClick={redirectToPage} className={styles.getstarted}>
            {/* <img src={props.img} alt="Deskripsi gambar" loading="lazy"></img> */}
            <Image src={props.img} className={styles.cardHomeImg} layout='responsive'/>
            <p>{props.cardName}</p>
        </div>  
    );
}