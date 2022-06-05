import NavLinks from './NavLinks';
import classes from './Navbar.module.scss';
import {CgMenu} from 'react-icons/cg';
import {CgClose} from 'react-icons/cg';
import { useState } from 'react';

export default function MobileNavigation() {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <CgMenu className={classes.hamburger} size="40" 
                          color="white" onClick={()=> setOpen(!open)}/>

  const hamburgerClose = <CgClose className={classes.hamburger} size="40"
                          color="white" onClick={()=> setOpen(!open)}/>

  const closeMobileMenu = ()=> setOpen(false);

  return (
      <nav className={classes.MobileNavigation}>

        {open ? hamburgerClose : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}

      </nav>
    
  )
}
