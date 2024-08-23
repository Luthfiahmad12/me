import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import img from "../assets/development.png"

export const Profile = () => {
    return (
        <div className="w-full rounded-md shadow-xl card bg-base-100">
            <div className="grid py-8 place-items-center">
                <div className="mb-5 avatar">
                    <div className="w-24 border border-gray-400 rounded-full opacity-90">
                        <img src="./user.svg" alt="profile" className="opacity-50" />
                    </div>
                </div>
                <div className="px-8 mx-auto text-center">
                    <h5 className="text-2xl font-bold">
                        <span className="text-base-content opacity-80 text-blue-500 cursor-pointer">
                            Achmad Luthfi Afif
                        </span>
                    </h5>
                    <div className="mt-3 font-mono text-blue-500 text-opacity-60">
                        Junior Web Developer | Design Web | PHP | Node.js
                    </div>
                </div>
                <div className="items-center mt-3 font-mono text-base-content text-opacity-60">
                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://github.com/Luthfiahmad12" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="size-8" />
                        </a>
                        <a href="http://www.linkedin.com/in/luthfi-afif12" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="size-8" />
                        </a>
                    </div>
                </div>
                <div className="gap-4 join">
                    <a
                        href="https://api.whatsapp.com/send?phone=6282138682214&text=Halo%2C%20saya%20ingin%20bekerja%20sama%20dengan%20anda%20untuk%20pembuatan%20website"
                        target="_blank"
                        className="mt-6 text-xs transition-transform duration-300 ease-in-out transform delay-150 btn bg-blue-500 text-white btn-sm hover:scale-110 hover:bg-blue-500"
                    >
                        Hire Me
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1NOu-80FnrDjbMJHkeHldHw7ixDaGo2LU/view?usp=drive_link" target="_blank"
                        className="mt-6 text-xs transition duration-300 ease-in-out delay-150 btn bg-blue-500 text-white btn-sm hover:scale-110 hover:bg-blue-500"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}