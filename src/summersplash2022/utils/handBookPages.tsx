import { WhichButtonPressed } from './utils';
const HandBooKPages = ({ selectedButton }: WhichButtonPressed) => {
  if (selectedButton === 'verdier') {
    return (
      <>
        <div>
          <p>
            Dette skal være en tekst om formål og verdier. Her skal det komme
            mer
          </p>
        </div>
      </>
    );
  } else if (selectedButton === 'Tillit og ansvar') {
    return (
      <>
        <div>
          <p>Tillit og ansvar</p>
        </div>
      </>
    );
  } else if (selectedButton === 'Fleksitid') {
    return (
      <div>
        <p>Fleksitid</p>
      </div>
    );
  } else if (selectedButton === 'Fri i jula') {
    return (
      <div>
        <p>Fri i jula</p>
      </div>
    );
  } else if (selectedButton === 'Kompetanseutvikling') {
    return (
      <div>
        <p>Kompetanseutvikling</p>
      </div>
    );
  } else {
    return <></>;
  }
};
export default HandBooKPages;
