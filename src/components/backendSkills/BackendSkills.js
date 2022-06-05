import {motion} from "framer-motion";
import classes from './backendSkills.module.scss';

export default function BackendSkills() {
    const skillsArr = ['Python', 'Django', 'Flask', 'Node', 'JSON', 'SQL/Postgres', 'MongoDB', 'AWS', 'Heroku'];

    return (
        <motion.div className={classes.backendSkills}>
            <ul>
            <li>
                <h3 className={classes.subtitle}>Skills Backend</h3>
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
