import { motion } from "framer-motion";

const animatorVariants = (delay, duration) => ({
    initial: {
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: duration,
            delay: delay,
            type: "easeInOut",
        },
    },
});

const Contact = () => {
    return (
        <div
            id="contact"
            className="min-h-[250px] mt-16 lg:mt-0 lg:pt-30 mb-3 lg:mb-7 flex items-center flex-col overflow-hidden"
        >
            <motion.h3
                variants={animatorVariants(0, 0.5)}
                whileInView="animate"
                initial="initial"
                className="text-4xl lg:text-5xl bg-gradient-to-r from-thirdcol to-blue-500 text-transparent bg-clip-text py-3"
            >
                Contact
            </motion.h3>
            <motion.p
                variants={animatorVariants(0.2, 0.3)}
                whileInView="animate"
                initial="initial"
                className="mt-4 lg:mt-6"
            >
                Kharegaon, Kalwa, Maharashtra - 400605
            </motion.p>
            <motion.a
                variants={animatorVariants(0.4, 0.3)}
                whileInView="animate"
                initial="initial"
                className="mt-5 underline text-thirdcol"
                href="mailto:kushwahaharshit999@gmail.com"
            >
                kushwahaharshit999@gmail.com
            </motion.a>
            <div className="w-screen h-[1px] mt-20 bg-[#ffffff62]"></div>
        </div>
    );
};

export default Contact;
