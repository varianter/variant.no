import Blob from '../../images/blobs/blobs';
import style from './blobText.module.css';

const BlobText = (props: {
  color: string;
  text: Array<string>;
  blobNr: number;
  threeBlobs?: boolean;
}) => {
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
        {props.text.map((paragraph, i) => {
          return (
            <p
              key={i}
              style={props.threeBlobs ? { textAlign: 'center' } : {}}
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
