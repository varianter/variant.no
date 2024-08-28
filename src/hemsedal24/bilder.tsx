import { UploadButton } from '../../src/utils/uploadthing';
import styles from './bilder.module.css';
import React, { useEffect, useState } from 'react';
import Files from './components/Files';
import '@uploadthing/react/styles.css';
import bop from './images/bop.svg';
import Link from 'next/link';
import arrowLeft from './images/arrow-left.svg'

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
    console.log(data);
    setFilesData(data);
  };
console.log((width/21)+(((width / 100) | 0)/4))
  const [filesData, setFilesData] = useState(null);
  useEffect(() => {
    fetchFiles();
  }, []);
  return (
    <main className={styles.main}>
      <Link className={styles.tilbake} href="/hemsedal24">
          <img src={arrowLeft} width={24} height={28} alt="pil venste" />
          <span>Tilbake</span>
        </Link>
      <div id="header" className={styles.header}>
        <h3>{mobile ? `Bild${'e'.repeat((width/24))}r 📸` : 'Bildeeeeeeeeeeeeeeeeeeeer 📸'}</h3>
        <div className={styles.uploadDropZone}>
          <UploadButton
            className={`${styles.customButton}`}
            appearance={{container:"items-end"}}
            /**
             * @see https://docs.uploadthing.com/api-reference/react#uploadbutton
             */
            endpoint="videoAndImage"
            onClientUploadComplete={(_: any) => {
              fetchFiles();
            }}
          />
        </div>
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
