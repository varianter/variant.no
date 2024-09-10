
import styles from './bilder.module.css';
import React, { useEffect, useState } from 'react';
import Files from './components/Files';
import '@uploadthing/react/styles.css';
import bop from './images/bop.svg';
import Link from 'next/link';
import arrowLeft from './images/arrow-left.svg'
import bildeopplastning from './images/bildeopplastning.svg'

export default function Bilder() {
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
      setMobile(window.innerWidth <= 500);
    };

    handleWindowSizeChange(); // Set initial value after component mounts
    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  const fetchFiles = async () => {
    const response = await fetch('/api/files');
    const data = await response.json();
    setFilesData(data);
  };
  const [filesData, setFilesData] = useState(null);
  useEffect(() => {
    fetchFiles();
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.links}>
      <Link className={styles.tilbake} href="/hemsedal24">
          <img src={arrowLeft} width={24} height={28} alt="pil venste" />
          <span>Tilbake</span>
        </Link>
      <Link className={styles.lastoppbilder} href="/hemsedal24/lastopp">
      <img src={bildeopplastning} alt="knapp til bildeopplastning" />
      </Link>
      </div>
      <div id="header" className={styles.header}>
        <h3>{mobile ? `Bild${'e'.repeat((width/24))}r 📸` : 'Bildeeeeeeeeeeeeeeeeeeeer 📸'}</h3>
  
      </div>
      {filesData && (
        <div>
          <Files data={filesData} />
        </div>
      )}
      {mobile ? <></> :
      <a href="#header">
          <div className={styles.bop}>
            <img src={bop} alt="big blobs" />
          </div>
        </a>}
    </main>
  );
}
