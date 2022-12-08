import Blob from '../../images/blobs/blobs';
import style from './blobText.module.css';

type BlobTextProps = {
  color: string;
  text: Array<string>;
  blobNr: number;
  threeBlobs?: boolean;
};

const BlobText = ({ color, text, blobNr, threeBlobs }: BlobTextProps) => {
  return (
    <div className={style.blobText}>
      <div className={style.blobText__blob}>
        <Blob BlobPathNr={blobNr} color={color} />
      </div>
      <div
        style={threeBlobs ? { backgroundPosition: 'right: 0 left 0' } : {}}
        className={style.blobText__textbox}
      >
        {text.map((paragraph, i) => {
          return (
            <p
              key={i}
              style={threeBlobs ? { textAlign: 'center' } : {}}
              className={style.blobText__text}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BlobText;
