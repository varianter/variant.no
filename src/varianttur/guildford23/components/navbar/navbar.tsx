import style from './navbar.module.css';

export enum NavItem {
  FRIDAY,
  SATURDAY,
  SUNDAY,
  INFO
};

const Navbar = ({ selectedNavItem }: { selectedNavItem?: NavItem }) => {
  return (
    <div className={style.navbarContainer}>
      <a href="#friday" className={selectedNavItem === NavItem.FRIDAY ? style.selected : ''}>Fredagen</a>
      <a href="#saturday" className={selectedNavItem === NavItem.SATURDAY ? style.selected : ''}>Lørdagen</a>
      <a href="#sunday" className={selectedNavItem === NavItem.SUNDAY ? style.selected : ''}>Søndagen</a>
      <a href="#info" className={selectedNavItem === NavItem.INFO ? style.selected : ''}>Praktisk info</a>
    </div>
  );
};

export default Navbar;