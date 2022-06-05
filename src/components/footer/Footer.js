import classes from './footer.module.scss';

export default function Footer() {
    const date = new Date().getFullYear();

  return (
    <div className={classes.footer}>
        <small>Copyright&copy; {date} | All rights reserved.</small>
    </div>
  )
}
