import {motion} from "framer-motion";
import classes from "./frontendSkills.module.scss";

export default function FrontendSkills() {
    const skillsArr = ['Javascript', 'jQuery', 'Bootstrap', 'React', 'Framer-Motion', 'Gulp', 'Git', 'Github'];

    return (
        <motion.div className={classes.frontendSkills}>
            <ul>
            <li>
                <h3 className={classes.subtitle}>Skills Frontend</h3>
            </li>
            {skillsArr.map((li, i) =>
                <motion.li key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}} 
                    transition={{type: "spring", bounce:0.6, duration: 1.5, delay: i * 0.4}}
                    variants={{
                        visible:{opacity: 1, scale: 1},
                        hidden:{opacity: 0, scale: 0}
                    }}>
                    {li}
                </motion.li>
            )}
            </ul>
        </motion.div>
    )
}
