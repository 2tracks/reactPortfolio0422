import {motion} from "framer-motion";

export const OnClickAnimate = ({children}) => {
    return(
        <motion.div whileTap={{scale: 0.75}} 
        transition= {{duration:0.5, ease:[0.6,0.05, -0.01, 0.9]}}>
            {children}
        </motion.div>
    )
}