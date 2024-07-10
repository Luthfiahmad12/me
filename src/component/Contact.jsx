import { BsSend, BsTelephoneInbound } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";

export const Contact = () => {
    return (
        <div className="card bg-base-200 w-full rounded-md shadow-xl">
            <div className="card-body p-6">
                <h1 className="card-title text-2xl">Contact</h1>
                <span>Feel free to connect with me</span>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
                    <div className="card bg-base-100 rounded-md shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-100">
                        <div className="flex justify-center items-center flex-col p-4 h-full w-full">
                            <BsSend className="size-6" />
                            <a href="mailto:luthfiafif625@gmail.com" target="_blank" rel="noopener noreferrer">
                                <p className="mt-2 font-medium font-mono hover:text-indigo-500">luthfiafif625@gmail.com</p></a>
                        </div>
                    </div>
                    <div className="card bg-base-100 rounded-md shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-100">
                        <div className="flex justify-center items-center flex-col p-4 h-full w-full">
                            <BsTelephoneInbound className="size-6" />
                            <a href="tel:+628123456789" target="_blank" rel="noopener noreferrer">
                                <p className="mt-2 font-medium font-mono hover:text-indigo-500">
                                    +62 812 3456 789
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-md shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-100">
                    <div className="flex justify-center items-center flex-col p-4 h-full w-full">
                        <TbMapSearch className="size-6" />
                        <p className="mt-2 font-medium font-mono hover:text-indigo-500">
                            Wonosobo, Central Java, Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}