import { motion } from "framer-motion";

const CursorBlinker = () => {
    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1],
            },
        },
    };

    return (
        <motion.div
            variants={cursorVariants}
            animate="blinking"
            className="inline-block absolute right-0 h-9 lg:h-11 ml-1 w-[2px]  translate-y-1 bg-white"
        />
    );
};

export default CursorBlinker;
