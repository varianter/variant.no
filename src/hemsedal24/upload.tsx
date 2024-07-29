import { UploadButton } from '../../src/utils/uploadthing';
import styles from './bilder.module.css';
import '@uploadthing/react/styles.css';
import Link from 'next/link';
import arrowLeft from './images/arrow-left.svg';

export default function Upload() {
  return (
    <div className={styles.uploadSite}>
      <div className={styles.linksUploadsite}>
        <Link className={styles.tilbake} href="/hemsedal24">
          <img src={arrowLeft} width={24} height={28} alt="pil venste" />
          <span>Til hjemmeside</span>
        </Link>
        <Link className={styles.tilbake} href="/hemsedal24/bilder">
          <img src={arrowLeft} width={24} height={28} alt="pil venste" />
          <span>Tilbake til bilder</span>
        </Link>
      </div>
      <div className={styles.uploadDropZone}>
        <UploadButton
          className={`${styles.customButton}`}
          appearance={{ container: 'items-center' }}
          /**
           * @see https://docs.uploadthing.com/api-reference/react#uploadbutton
           */
          endpoint="videoAndImage"
          onClientUploadComplete={(res: any) => {
            // Do something with the response
            console.log('Files: ', res);
          }}
          onUploadError={(error: Error) => {
            alert(`En feil har skjedd. Feilmelding: ${error.message}`);
          }}
          content={{
            allowedContent() {
              return 'Bilder opp til 16MB, maks 20 om gangen';
            },
          }}
        />
      </div>
    </div>
  );
}
