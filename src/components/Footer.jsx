import { a } from "framer-motion/client";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    const footerIconsArray = [
        { icon: <SiLeetcode size={28} />, url: "https://leetcode.com/u/harsku/" },
        { icon: <IoLogoGithub size={28} />, url: "https://github.com/hasrku" },
        { icon: <IoLogoLinkedin size={28} />, url: "https://www.linkedin.com/in/harshit-kushwaha" },
    ];

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-10 lg:gap-16 pb-7">
                {footerIconsArray.map((item) => (
                    <a
                        key={item.url}
                        href={item.url}
                        className="cursor-pointer mx-2 transition duration-200 hover:text-thirdcol"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            <div className="w-full h-1 bg-linear-90 from-seccol to-thirdcol"></div>
        </div>
    );
};

export default Footer;
