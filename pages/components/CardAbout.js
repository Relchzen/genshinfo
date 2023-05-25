import styles from "../../styles/about.module.css"
import Image from "next/image";

export default function CardAbout(props){
    return(
        <div className={styles.cardAbout}>
            <div className={styles.gambar}>
                <Image src={props.img} className={styles.gmbr} alt="Gambar" />
            </div>
            <div className={styles.info}>
                <h1>{props.name}</h1>
                <div>
                    <p>{props.nim}</p>
                    <p>{props.job}</p>
                    
                </div>
            </div>
        </div>
    );
}