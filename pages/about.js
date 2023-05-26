import { Card } from "@chakra-ui/react";
import Contacts from "./contact";
import CardAbout from "./components/CardAbout";
import styles from "../styles/about.module.css"
import IntroAboutUs from "./components/IntroAboutUs";
export default function About(){
    return(
        <div className={styles.about}>
            <div className={styles.title}>
                <h1>About Us</h1>
            </div>
            <div>
                <IntroAboutUs
                    img = {Contacts[0].img}
                />
            </div>
            <div className= {styles.bungkusCard}>
                {Contacts.map((contact) => (
                    <CardAbout
                        name = {contact.name}
                        nim = {contact.nim}
                        job = {contact.job}
                        img = {contact.img}
                        instagram = {contact.instagram}
                    />
                ))}
            </div>
        </div>
    );

}