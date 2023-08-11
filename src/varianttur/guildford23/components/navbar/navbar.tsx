import style from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <a href="#friday">Fredagen</a>
      <a href="#saturday">Lørdagen</a>
      <a href="#sunday">Søndagen</a>
      <a href="#info">Praktisk info</a>
    </div>
  );
};

export default Navbar;