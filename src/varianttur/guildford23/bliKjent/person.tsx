import style from './bliKjent.module.css';
import { GetToKnow } from './getToKnow';

const Person = ({person, variantIndex} : {person: GetToKnow, variantIndex: number}) => {
  return (
    <div className={variantIndex % 2 === 0 ? style.reversePersonContainer : style.personContainer}>
        <div className={style.imageContainer}>
          {person.image && <img src={person.image} alt={person.name} className={style.image} />}
        </div>
        <div className={style.personInfoContainer}>
           <h4>{person.name}</h4>
           {person.q1 && <p className={style.personInfo}>{person.q1}</p>}
           {person.q2 && <p className={style.personInfo}>{person.q2}</p>}
           {person.q3 && <p className={style.personInfo}>{person.q3}</p>}
        </div>
    </div>
  );
};

export default Person;