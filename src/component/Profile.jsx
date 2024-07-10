import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import img from "../assets/development.png"

export const Profile = () => {
    return (
        <div className="card bg-base-100 shadow-xl rounded-md w-full">
            <div className="grid place-items-center py-8">
                <div className="avatar mb-5">
                    <div className="w-24 rounded-full opacity-90 border border-gray-400">
                        <img src={img} alt="profile" />
                    </div>
                </div>
                <div className="text-center mx-auto px-8">
                    <h5 className="font-bold text-2xl">
                        <span className="text-base-content opacity-70">
                            Achmad Luthfi Afif
                        </span>
                    </h5>
                    <div className="mt-3 text-base-content text-opacity-60 font-mono">
                        ⚡ Junior Web Developer | Design Web | PHP | Node.js | React ⚡
                    </div>
                </div>
                <div className="mt-3 text-base-content text-opacity-60 font-mono items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <FaGithub className="size-8" />
                        <FaLinkedin className="size-8" />
                    </div>
                </div>
                <div className="join gap-4">
                    <a
                        href="https://api.whatsapp.com/send?phone=6282138682214&text=Halo%2C%20saya%20ingin%20bekerja%20sama%20dengan%20anda%20untuk%20pembuatan%20website"
                        target="_blank"
                        className="btn btn-primary btn-sm text-xs mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    >
                        Hire Me
                    </a>
                    <a
                        href="#"
                        className="btn btn-primary btn-sm text-xs mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}