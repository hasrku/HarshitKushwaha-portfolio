import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const StarParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="absolute z-[0] h-[150vh] pt-20">
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="w-full h-full"
                options={{
                    fullScreen: { enable: false },
                    background: { color: "" },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                parallax: { enable: true, smooth: 20, force: 80 },
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 70,
                                duration: 0.5,
                            },
                        },
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        move: {
                            enable: true,
                            speed: 0.2,
                            direction: "none",
                            outModes: { default: "out" },
                        },
                        number: {
                            density: { enable: true, area: 1500 },
                            value: 300,
                        },
                        opacity: {
                            value: { min: 0.3, max: 1 },
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default StarParticles;
