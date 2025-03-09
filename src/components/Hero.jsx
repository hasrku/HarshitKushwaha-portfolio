import { useState, useEffect, useRef } from "react";
import { motion, transform } from "framer-motion";
import { Link } from "react-scroll";
import { PiDownloadSimpleBold, PiUserBold } from "react-icons/pi";
import CursorBlinker from "./CursorBlinker";
import manLaptop from "../assets/images/manLaptop.png";
import rocket from "../assets/images/rocket.png";
import ufo from "../assets/images/ufo.png";

const Hero = () => {
    const typingNames = ["Harshit Kushwaha", "Full Stack Developer", "Software Engineer"];
    const [index, setIndex] = useState(0);
    const [widtht, setWidth] = useState(0);
    const [isShrinking, setIsShrinking] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setWidth(textRef.current.offsetWidth + 10); // Get width in pixels
        }
    }, [index]);

    useEffect(() => {
        const shrinkTimeout = setTimeout(() => {
            setIsShrinking(true);
        }, 3000); // Shrink after 3s
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % typingNames.length);
            setIsShrinking(false);
        }, 5000);

        return () => {
            clearTimeout(shrinkTimeout);
            clearTimeout(interval);
        };
    }, [index]);

    const imageVariants = {
        animate: {
            x: [0, 30, -20], // Moves right, then left
            y: [0, -20, 20], // Moves up when going right, down when going left
            transition: {
                duration: 6, // Time for one cycle
                repeat: Infinity, // Infinite loop
                repeatType: "reverse", // Moves back and forth smoothly
                ease: "easeInOut", // Smooth motion
            },
        },
    };

    return (
        <div
            id="home"
            className="min-h-[90vh] items-center lg:justify-center pt-16 lg:pt-40 flex flex-col-reverse lg:flex-row px-0 lg:px-50 z-20 overflow-hidden"
        >
            <div className="px-4 mt-10 lg:mt-0 lg:px-0 lg:w-[550px]">
                <p className="text-xl lg:text-3xl">hi,</p>
                <h1 className="text-xl lg:text-3xl h-10 flex items-baseline">
                    I'm &nbsp;
                    <motion.span
                        key={index}
                        initial={{ width: "0px" }}
                        animate={{ width: isShrinking ? "0px" : `${widtht}px` }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent relative text-[32px] lg:text-5xl font-semibold whitespace-nowrap overflow-hidden inline-block h-16 lg:mr-9"
                    >
                        {typingNames[index]}
                        <CursorBlinker />
                    </motion.span>
                </h1>
                <span
                    className="text-[32px] lg:text-5xl font-semibold whitespace-nowrap invisible absolute"
                    ref={textRef}
                >
                    {typingNames[index]}
                </span>

                <p className="mt-2 pr-5 lg:pr-0 lg:mt-5 text-lg lg:text-xl lg:w-5/6 text-justify lg:text-left">
                    A developer & programmer crafting innovative solutions and creativity. Passionate about building seamless, scalable and ensuring
                    seamless user experiences .Focused on performance, problem-solving, and delivering impactful digital experiences.
                </p>

                <div className="flex  lg:ml-2 mt-5 lg:mt-9 gap-5 lg:gap-9">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-lg px-5 lg:px-8 py-3 lg:py-4 cursor-pointer z-30 bg-seccol rounded-4xl flex justify-center items-center gap-3"
                    >
                        <PiDownloadSimpleBold className="size-5" /> Resume
                    </motion.button>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="text-lg px-5 lg:px-8 py-3 lg:py-4 cursor-pointer bg-transparent backdrop-blur-2xl border-2 border-seccol rounded-4xl flex justify-center items-center gap-3"
                        >
                            <PiUserBold className="size-5" />
                            Contact
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="w-[350px] lg:w-[500px] h-full relative lg:mr-10">
                <img
                    src={manLaptop}
                    alt="man with laptop"
                    className="z-20 relative "
                ></img>
                <motion.img
                    variants={imageVariants}
                    whileInView="animate"
                    src={rocket}
                    alt="rocket"
                    className="absolute z-10 top-10 lg:top-20 left-10 lg:left-20 w-[70px] lg:w-[100px]"
                />
                <motion.img
                    variants={imageVariants}
                    whileInView="animate"
                    src={ufo}
                    alt="ufo"
                    className="absolute z-10 bottom-[-2rem] lg:bottom-[-20px] right-0 lg:right-0 rotate-[-40deg] scale-x-[-1] w-24 lg:w-[150px]"
                />
                <div className="bottom-[-1rem] lg:bottom-14 right-3 lg:right-5 rounded-[40%] rotate-10 absolute z-0 w-8/10 lg:w-7/10 aspect-square bg-seccol "></div>
                <div className="bottom-[-0.5rem] lg:bottom-16 right-4 lg:right-7 rounded-[40%] shadow-2xl rotate-10 absolute z-5 w-8/10 lg:w-7/10 aspect-square bg-thirdcol "></div>
            </div>
        </div>
    );
};

export default Hero;
