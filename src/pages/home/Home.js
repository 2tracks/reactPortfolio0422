import {useState} from 'react';
import { useEffect } from 'react';
import classes from './Home.module.scss';
import SocialIcons from '../../components/socialIcons/SocialIcons';
import ButtonMyWork from '../../components/buttonMyWork/ButtonMyWork';
import ScrollDown from '../../components/scrollDown/ScrollDown';
import bg_computer_sm from '../../img/bg_computer_sm.jpg';
import bg_computer_md from '../../img/bg_computer_md.jpg';
import bg_computer_lg from '../../img/bg_computer_lg.jpg';

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoints = {
    small: 570,
    medium: 992,
  }

  const small = bg_computer_sm;
  const medium = bg_computer_md;
  const large = bg_computer_lg;

  useEffect(()=>{
    const handleWindowResize = ()=> setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return ()=> window.removeEventListener("resize", handleWindowResize);
  },[]);

  
  return (
    <div id="home" className={classes.home}>
    {
      (width < breakpoints.small) ? <img src={small} alt="bg"/> : (width < breakpoints.medium) ? <img src={medium} alt="bg"/> : <img src={large} alt="bg"/>
    }
      <div className={classes.container}> 
        <h1>Gabriela Di Salvatore-Bosshard</h1>
        <SocialIcons/>
        <h3 className='homeSub'>Software Developer | Full Stack Web Developer | Web Designer</h3>
        <ButtonMyWork/>
        <ScrollDown/>
      </div>
    </div>
  )
}
