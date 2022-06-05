import {motion, variants} from 'framer-motion';
import classes from './PageHeader.modules.scss';


const PageHeader = (props) => {
  const lineVariants: variants ={
    offscreen:{
      opacity: 0,
      scale: 0,
      y:0
    },
    onscreen: {
      opacity: 1,
      scale: 1.2,
      y: 0,
      transition:{
        type: "spring",
        bounce: 1,
        duration: 6
      }
    }
  }
  return (
    <div className={classes.container}>
        <motion.hr
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once: true, amount: 0.8}}
          variants={lineVariants}
        />
        <h1>{props.title}</h1>
    </div>
  )
}

export default PageHeader;