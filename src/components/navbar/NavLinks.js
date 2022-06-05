import classes from './Navbar.module.scss';


export default function NavLinks(props) {
  return (
    <ul className={classes.NavLinks}>
        <li>
            <a href="#home" onClick={()=> props.isMobile && props.closeMobileMenu()}>Home</a>
        </li>
        <li>
            <a href="#about" onClick={()=> props.isMobile && props.closeMobileMenu()}>About</a>
        </li>
        <li>
            <a href="#work" onClick={()=> props.isMobile && props.closeMobileMenu()}>Work</a>
        </li>
        <li>
            <a href="#contact" onClick={()=> props.isMobile && props.closeMobileMenu()}>Contact</a>
        </li>
    </ul>
  )
}
