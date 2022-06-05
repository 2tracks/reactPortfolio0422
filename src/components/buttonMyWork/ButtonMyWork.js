import classes from './buttonMyWork.module.scss';

export default function ButtonMyWork() {
  return (
        <div className={classes.btnWrapper}>
                <a href="#work" className={`${classes.btn} ${classes.btnMyWork}`}>
                    My Work
                </a>
        </div>
    )
}
