import style from './heading.module.css';
import Arrow from './arrow';
import Reisefeberblob from './reisefeberblob';

const Heading = () => {
  return (
    <div className={style.headingContainer}>
      <div className={style.blobInfoContainer}>
        <div className={style.blobInfo}>
          <span className={style.blobName}>Reisefeber-blob</span>
          <div className={style.arrow}>
            <Arrow />
          </div>
        </div>
      </div>
      <div className={style.blobContainer}>
        <Reisefeberblob />
      </div>
      <div className={style.heading}>
        <span className={style.supHeading}>Varianttur 2023</span>
        <h1 className={style.mainHeading}>Guildford</h1>
        <h2 className={style.subHeading}>1.-3. september</h2>
      </div>
    </div>
  )
};

export default Heading;