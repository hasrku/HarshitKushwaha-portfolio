import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const navItems = [
        { label: "Home", to: "home", id: "hometab" },
        { label: "Projects", to: "projects", id: "projectstab" },
        { label: "Contact", to: "contact", id: "contacttab" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState(navItems[0].id);
    const [navActive, setNavActive] = useState(false);

    const toggleNavbar = () => {
        setNavActive(!navActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Ensures section is considered "active" when 50% in view
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id + "tab");
                }
            });
        }, observerOptions);

        // Attach observer to each section
        navItems.forEach((item) => {
            const section = document.getElementById(item.to);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const navVariants = {
        initial: {
            y: -10,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "easeInOut",
            },
        },
    };

    return (
        <>
            <div
                className={`flex z-50 h-16 lg:h-auto overflow-hidden justify-center items-center fixed top-0 w-full py-3 px-5 lg:px-50 backdrop-blur-xl transition-all duration-300 shadow-lg shadow-[#00011290] ${
                    isScrolled ? "bg-[#01081e8e] shadow-md" : "bg-transparent"
                } `}
            >
                <a
                    href="/"
                    className="font-mono text-xl lg:text-2xl cursor-pointer mr-auto"
                >
                    {"< harsku />"}
                </a>
                <div className="hidden lg:block">
                    {navItems.map((item) => (
                        <Link
                            to={item.to}
                            id={item.id}
                            smooth={true}
                            duration={500}
                            key={item.id}
                            offset={-65}
                            onClick={() => setActiveTab(item.id)}
                            className={`relative cursor-pointer text-lg px-4 py-2 ml-16 rounded-full transition duration-200 ${
                                activeTab !== item.id ? "hover:bg-[#1e1a4d90]" : ""
                            }`}
                        >
                            {activeTab === item.id && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                    style={{ borderRadius: 9999 }}
                                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                                />
                            )}
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div
                    onClick={toggleNavbar}
                    className="lg:hidden ml-auto z-60 bg-[#162a5267] rounded-full p-1 cursor-pointer"
                >
                    {navActive ? <IoClose size={30} /> : <IoMenu size={30} />}
                </div>
            </div>

            <AnimatePresence>
                {navActive && (
                    <>
                        <motion.div
                            variants={navVariants}
                            initial="initial"
                            animate="animate"
                            exit="initial"
                            className="fixed  w-screen min-h-40 mt-16 top-0 left-0 lg:hidden z-70 bg-[#100b38a5] backdrop-blur-3xl rounded-b-3xl"
                        >
                            <div className="py-5 gap-3 flex flex-col justify-center items-center">
                                {navItems.map((item) => (
                                    <Link
                                        to={item.to}
                                        id={item.id}
                                        smooth={true}
                                        duration={500}
                                        key={item.id}
                                        offset={-65}
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            toggleNavbar();
                                        }}
                                        className={` relative cursor-pointer text-lg px-4 py-2  ${
                                            activeTab !== item.id ? "hover:bg-[#1e1a4d90]" : ""
                                        } rounded-full transition duration-200`}
                                    >
                                        {activeTab === item.id && (
                                            <motion.span
                                                layoutId="bubble"
                                                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                                style={{ borderRadius: 9999 }}
                                                transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                                            />
                                        )}
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                        <div
                            className="h-screen w-screen fixed top-0 left-0 z-60"
                            onClick={toggleNavbar}
                        ></div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
