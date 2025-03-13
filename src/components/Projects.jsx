import { motion } from "framer-motion";
import { projects } from "../assets/files/projects.js";
import TechLabels from "./TechLabels.jsx";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import astronaut from "../assets/images/astronaut.png";

const animatorVariants = (delay, duration) => {
    const isSmallDevice = window.innerWidth <= 1000;
    return {
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
    };
};

const Projects = () => {
    const imageVariants = {
        animate: {
            x: [0, 20, -20],
            y: [0, -20, 20],
            transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    };

    return (
        <div
            id="projects"
            className="min-h-[80vh] px-20 mt-12 lg:mt-20 flex items-center flex-col overflow-hidden"
        >
            <motion.span
                variants={animatorVariants(0, 0.8)}
                initial="initial"
                whileInView="animate"
                className="text-center text-4xl lg:text-5xl bg-gradient-to-r from-thirdcol to-blue-500 text-transparent bg-clip-text py-3"
            >
                Projects
            </motion.span>

            <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-8 mt-3 relative">
                <motion.img
                    variants={imageVariants}
                    whileInView="animate"
                    src={astronaut}
                    alt="astronaut"
                    className="absolute z-40 left-[-1rem] lg:left-[-6rem] top-[-0rem] w-20 lg:w-[7rem]"
                />
                {projects.map((item, index) => (
                    <ProjectCard
                        key={item.repo}
                        index={index}
                        name={item.name}
                        image={item.image}
                        date={item.date}
                        repo={item.repo}
                        techs={item.techs}
                        demo={item.demo}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ index, name, image, date, repo, demo, techs, description }) => {
    return (
        <>
            <motion.div
                variants={animatorVariants(index / 5 + 0.2, 0.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: window.innerWidth <= 1000 }}
                className="w-[320px] lg:w-[280px] z-20 min-h-7 border-2 bg-gray-900 border-gray-600 rounded-4xl px-4 pt-5 pb-4 flex flex-col"
            >
                <motion.a
                    whileHover={{
                        backgroundSize: "103%",
                        transition: {
                            duration: 0.3,
                            type: "easeInOut",
                        },
                    }}
                    href={demo}
                    style={{ backgroundImage: `url(${image})`, backgroundSize: "100%" }}
                    className="w-[100%] shadow-sm bg-no-repeat shadow-thirdcol aspect-square rounded-2xl bg-center overflow-hidden"
                ></motion.a>
                <h3 className="text-[27px] text-center mt-5 mb-3 font-semibold">{name}</h3>
                <div className="flex gap-8 justify-center mb-5  lg:px-5">
                    <a href={repo}>
                        <AiFillGithub size={22} />
                    </a>
                    <a
                        className="flex gap-2.5 items-baseline"
                        href={demo}
                    >
                        <span className=" text-md">demo</span> <BsBoxArrowUpRight size={13} />
                    </a>
                    <span className=" text-sm text-neutral-500">
                        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </span>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2 mb-5 flex-wrap">
                        {techs.map((item) => (
                            <TechLabels
                                key={item}
                                techStack={item}
                            />
                        ))}
                    </div>
                    <p className="text-justify">{description}</p>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
