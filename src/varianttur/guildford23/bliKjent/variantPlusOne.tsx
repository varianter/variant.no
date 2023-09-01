import style from './bliKjent.module.css';
import Person from './person';
import { VariantPlusOneModel } from './getToKnow';

const VariantPlusOne = ({variant, variantIndex}: {variant: VariantPlusOneModel, variantIndex: number}) => {
  return (
    <div className={variantIndex % 2 !== 0 ? style.variantContainer : style.reverseVariantContainer}>
      {variant.people.map((person, index) => <div key={index}><Person person={person} variantIndex={variantIndex} /></div>)}
    </div>
  );
};

export default VariantPlusOne;