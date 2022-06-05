import classes from './scrollDown.module.scss'

export default function ScrollDown() {
  return (
    <a href="#about" className={classes.scrollDown}>
        <div className={classes.mouse}>
                <span></span>
        </div>
        <div className={classes.arrow}>
            <span></span>
        </div>
    </a>   
  )
}
