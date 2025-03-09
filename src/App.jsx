import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import StarParticles from "./components/StarParticles";

const App = () => {
    return (
        <div className="bg-bgcolor relative text-white min-h-screen font-petrov selection:bg-thirdcol selection:text-bgcolor">
            <Navbar />
            <StarParticles />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
