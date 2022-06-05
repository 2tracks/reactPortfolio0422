import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaCodepen} from 'react-icons/fa';
import {GoMailRead} from 'react-icons/go'
import classes from './socialIcons.module.scss';


export default function SocialIcons() {
  return (
    <div className={classes.socialIcons}>     
        <a href="https://www.linkedin.com/in/gabriela-disalvatore-bosshard/" target="_blank" rel="noreferrer noopener"><FaLinkedin size={35}/><div className={classes.text}>LinkedIn</div></a>
        <a href="https://github.com/2tracks" target="_blank" rel="noreferrer noopener"><FaGithub size={35}/><div className={classes.text}>Github</div></a>
        <a href="https://codepen.io/gabrielaDSB" target="_blank" rel="noreferrer noopener"><FaCodepen size={35}/><div className={classes.text}>Codepen</div></a>
        <a href="mailto:gabrieladisalvatore@gmail.com?body=You got a mail from your Website" target="_blank" rel="noreferrer noopener"><GoMailRead size={35}/><div className={classes.text}>Mail</div></a>     
    </div>
  )
}
