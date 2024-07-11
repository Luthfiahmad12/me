import { FaReact } from "react-icons/fa6";

export const Footer = () => {
    const getFullYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer className="text-center mt-4 p-4">
            &copy; {getFullYear()} Build with
            <img className="inline-block size-5 mx-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
            and

            <img className="inline-block size-5 react-logo mx-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        </footer>
    );
};