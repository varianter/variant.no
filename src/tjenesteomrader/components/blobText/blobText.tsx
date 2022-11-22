import Blob from '../../images/blobs/blobs';
import style from './blobText.module.css';

const BlobText = (props: {
  color: string;
  text: Array<string>;
  blobNr: number;
}) => {
  return (
    <div className={style.blobText}>
      <div className={style.blobText__blob}>
        <Blob BlobPathNr={props.blobNr} color={props.color} />
      </div>
      <div
        // style={{
        //   backgroundImage: `url(${test})`,
        // }}
        className={style.blobText__textbox}
      >
        {props.text.map((paragraph) => {
          return <p className={style.blobText__text}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default BlobText;
