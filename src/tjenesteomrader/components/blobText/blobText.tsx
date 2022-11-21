import Blob from '../../images/blobs/blobs';
import style from './blobText.module.css';

const BlobText = (props: { color: string; text: Array<string> }) => {
  return (
    <div className={style.blobText}>
      <Blob BlobPathNr={0} color={props.color} />
      <div className={style.blobText__textbox}>
        {props.text.map((paragraph) => {
          return <p className={style.blobText__text}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default BlobText;
