import { BsSend, BsTelephoneInbound } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";

export const Contact = () => {
    return (
        <div className="w-full rounded-md shadow-xl card bg-base-300">
            <div className="p-6 card-body">
                <h1 className="text-2xl card-title">Contact</h1>
                <span>Feel free to connect with me</span>
                <div className="grid gap-4 mt-4 lg:grid-cols-2 sm:grid-cols-1">
                    <div className="transition duration-300 ease-in-out rounded-md shadow-xl card bg-base-100 hover:shadow-2xl hover:-translate-y-1 hover:scale-100">
                        <div className="flex flex-col items-center justify-center w-full h-full p-4">
                            <BsSend className="size-6" />
                            <a href="mailto:luthfiafif625@gmail.com" target="_blank" rel="noopener noreferrer">
                                <p className="mt-2 font-mono font-medium hover:text-blue-500">luthfiafif625@gmail.com</p></a>
                        </div>
                    </div>
                    <div className="transition duration-300 ease-in-out rounded-md shadow-xl card bg-base-100 hover:shadow-2xl hover:-translate-y-1 hover:scale-100">
                        <div className="flex flex-col items-center justify-center w-full h-full p-4">
                            <BsTelephoneInbound className="size-6" />
                            <a href="tel:+628123456789" target="_blank" rel="noopener noreferrer">
                                <p className="mt-2 font-mono font-medium hover:text-blue-500">
                                    +62 812 3456 789
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="transition duration-300 ease-in-out rounded-md shadow-xl card bg-base-100 hover:shadow-2xl hover:-translate-y-1 hover:scale-100">
                    <div className="flex flex-col items-center justify-center w-full h-full p-4">
                        <TbMapSearch className="size-6" />
                        <p className="mt-2 font-mono font-medium cursor-pointer hover:text-blue-500">
                            Wonosobo, Central Java, Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}