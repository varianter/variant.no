import styles from './hemsedal.module.css'
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Hero from './components/Hero'

const Hemsedal24: NextPage = () => {
    return (
        <div className={styles.tur}>
            <Head>
                <title>Hemsedal</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Hero/>
        </div>
    );
};

export default Hemsedal24;