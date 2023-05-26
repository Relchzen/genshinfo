import { Card } from "@chakra-ui/react";
import Contacts from "./contact";
import CardAbout from "./components/CardAbout";
import styles from "../styles/about.module.css"
import Image from "next/image"
export default function About(){
    return(
        <div className={styles.about}>
            <div className={styles.title}>
                <h1>About Us</h1>
            </div>
            <div className= {styles.bungkusCard}>
                {Contacts.map((contact) => (
                    <CardAbout
                        name = {contact.name}
                        nim = {contact.nim}
                        job = {contact.job}
                        img = {contact.img}
                    />
                ))}
            </div>
        </div>
    );

}