import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import classes from './Navbar.module.scss';

export default function nav() {
  return (
    <div className={classes.Navbar}>
      <Navigation/>
      <MobileNavigation/>
    </div>
  )
}
