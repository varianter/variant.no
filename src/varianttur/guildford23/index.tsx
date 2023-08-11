import style from './guildford23.module.css';
import Hero from './components/hero/hero';
import Description from './components/description/description';
import Itinerary from './components/itinerary/itinerary';
import Info from './components/info/info';

export default function Guildford23() {
  return (
    <div className={style.container}>
      <Hero />
      <Description />
      <Itinerary />
      <Info />
    </div>
  )
};