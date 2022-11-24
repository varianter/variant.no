import Blob from '../../images/blobs/blobs';
import style from './blobText.module.css';
import { useMediaQuery } from 'react-responsive';

const BlobText = (props: {
  color: string;
  text: Array<string>;
  blobNr: number;
  threeBlobs?: boolean;
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  return (
    <div className={style.blobText}>
      <div className={style.blobText__blob}>
        <Blob BlobPathNr={props.blobNr} color={props.color} />
      </div>
      <div
        style={
          props.threeBlobs ? { backgroundPosition: 'right: 0 left 0' } : {}
        }
        className={style.blobText__textbox}
      >
        {props.text.map((paragraph) => {
          return (
            <p
              style={props.threeBlobs && !isMobile ? { maxWidth: '20rem' } : {}}
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
