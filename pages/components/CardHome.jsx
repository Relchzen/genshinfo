import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
// import Image from 'next/image';
// import CardCharacters from "../../public/src/cardCharacters.png"

export default function CardHome (props){

    const router = useRouter();

    const redirectToPage = () => {
      router.push('../characters');
    }
    return (
        <div onClick={redirectToPage} className={styles.getstarted}>
            {/* <img src={props.cardAPI} alt="Deskripsi gambar" loading="lazy"></img> */}
            {/* <Image src={CardCharacters} className={styles.cardHomeImg}/> */}
            <p>{props.cardName}</p>
        </div>  
    );
}