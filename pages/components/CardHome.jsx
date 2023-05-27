import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function CardHome (props){

    const router = useRouter();

    const redirectToPage = () => {
      router.push('../characters');
    }
    return (
        <div onClick={redirectToPage} className={styles.getstarted}>
            <p>{props.cardName}</p>
        </div>  
    );
}