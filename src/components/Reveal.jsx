import { motion } from "framer-motion";
export default function Reveal({ children, className, delay = 0, direction = "up", duration = 0.6, }) {
    const offsets = {
        up: { y: 28 },
        left: { x: -28 },
        right: { x: 28 },
        none: {},
    };
    const variants = {
        hidden: {
            opacity: 0,
            ...offsets[direction],
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
        },
    };
    return (<motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants}>
      {children}
    </motion.div>);
}
export function Stagger({ children, className, stagger = 0.1, }) {
    return (<motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={{
            hidden: {},
            visible: {
                transition: { staggerChildren: stagger },
            },
        }}>
      {children}
    </motion.div>);
}
export const staggerItem = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};
