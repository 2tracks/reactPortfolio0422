import classes from './card.module.scss';

export default function Card({title,imageUrl,cardTitle,body,projectLink,githubLink}) {
  return (
    <div className={classes.cardContainer}>
        <div className={classes.imageContainer}>
            <img src={imageUrl} alt="" />
            <h2 className={classes.title}>{title}</h2>
        </div>
        
        <div className={classes.cardTitle}>
            <h4>{cardTitle}</h4>
        </div>
        <div className={classes.cardBody}>
            <p>{body}</p>
        </div>
        
        <div className={classes.btn}>
            <a href={projectLink} target="_blank" rel="noreferrer" className={classes.project}>
                <button>Live Preview</button>
            </a>
            <a href={githubLink} target="_blank" rel="noreferrer" className={classes.github}>
                <button>Github</button>
            </a>
        </div>
        
    </div>
  )
}
