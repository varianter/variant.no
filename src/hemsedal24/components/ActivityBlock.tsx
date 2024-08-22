
import Link from "next/link";

import styles from "./ActivityBlock.module.css"
import { ReactNode } from "react";

export default function ActivityBlock({ title, text, link, reference, secondtext, picture}: { title: string, text: string, link: string, reference: string,secondtext:ReactNode,picture:string}) {
    return <section style={{display:"flex", justifyContent:"center", margin: "auto"}}>
        <div className={styles.block}>
            <div className={styles.textportion}>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>Du finner mer informasjon om {reference} <Link href={link}>HER</Link></p>
                <p>{secondtext}</p>
            </div>
            <div className={styles.picture}><img src={picture} alt='bilde' /></div>
        </div>
    </section>
}

