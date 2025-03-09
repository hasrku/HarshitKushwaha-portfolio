import todoProject from "../images/todoProject.png";
import pdfProject from "../images/pdfProject.png";
import weatherProject from "../images/weatherProject.png";
import tictactoeProject from "../images/tictactoeProject.png";

export const projects = [
    {
        name: "To-Do List",
        date: new Date(2024, 9, 4),
        repo: "https://github.com/hasrku/ToDo-List",
        demo: "https://hasrku.github.io/ToDo-List/",
        techs: ["HTML", "CSS", "JavaScript"],
        image: todoProject,
        description: "A simple To-Do List web app that lets users add, mark, and unmark tasks. Tasks are stored locally using localStorage.",
    },
    {
        name: "Image-To-PDF",
        date: new Date(2025, 0, 13),
        repo: "https://github.com/hasrku/Image-to-PDF",
        demo: "https://image-to-pdf-three.vercel.app/",
        techs: ["React", "Tailwind", "JsPDF"],
        image: pdfProject,
        description: "An Image to PDF Converter that supports all image formats. Users can upload multiple images, and with a single click.",
    },
    {
        name: "WeatherNow",
        date: new Date(2025, 1, 9),
        repo: "https://github.com/hasrku/WeatherNow/",
        demo: "https://weather-now-gamma-drab.vercel.app/",
        techs: ["React", "Tailwind", "Axios"],
        image: weatherProject,
        description: "A weather web app that fetches real-time data based on location. Users can save or remove favorite locations.",
    },
    {
        name: "Tic-Tac-Toe",
        date: new Date(2025, 1, 16),
        repo: "https://github.com/hasrku/Tic-Tac-Toe",
        demo: "https://tic-tac-toe-indol-five-58.vercel.app/",
        techs: ["React", "Tailwind", "Framer Motion"],
        image: tictactoeProject,
        description: "A Tic-Tac-Toe web game with cool grid animations, a settings panel to switch first player or toggle PvP/PvC mode.",
    },
];
