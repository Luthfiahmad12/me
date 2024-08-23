import { AiOutlineStar } from "react-icons/ai"
import { FaLink } from "react-icons/fa6";

const projects = [
    {
        name: "E-commerce Kedai MsCoffe",
        description: "This is project 1",
        tags: ['PHP', 'laravel', 'Jquery Ajax', 'MySQl']
    },
    {
        name: "Berkah Mandiri Sayur",
        description: "This is project 2",
        tags: ['PHP', 'Laravel', 'MySQL']
    },
    {
        name: "Sistem Pakar",
        description: "This is project 3",
        tags: ['PHP', 'Jquery Ajax', 'MySQL']
    },
    {
        name: "Sistem Reseller Carica",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus. Iste, natus.",
        tags: ['PHP', 'Laravel', 'MySQL']
    },
    {
        name: "Sistem Booking Kamar Hotel",
        description: "This is project 4",
        tags: ['PHP', 'Laravel', 'Jquery Ajax', 'MySQL']
    },
    {
        name: "sistem pembayaran SPP Paud",
        description: "This is project 5",
        tags: ['PHP', 'laravel', 'MySQL']
    },
    {
        name: "CMS Portal Informasi Puskemas",
        description: "This is project 6",
        tags: ['PHP', 'Laravel', 'Livewire', 'MySQL']
    },
    {
        name: "landing Page Profile",
        description: "This is project 7",
        tags: ['React.js', 'TailwindCSS']
    },
]

export const Project = ({ className = 'w-full' }) => {
    return (
        <div className={`card bg-base-300 ${className} rounded-md shadow-md`}>
            <div className="p-6 card-body">
                <h1 className="text-2xl card-title">Projects</h1>
                <span>Here are some projects I've worked on</span>
                <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2 sm:grid-cols-1">
                    {projects.map((item, index) => (
                        <div key={index} className="transition duration-300 ease-in-out rounded-md shadow-lg card bg-base-100 hover:shadow-2xl hover:-translate-y-1 hover:scale-100 ">
                            <div className="flex flex-col justify-between p-4">
                                <div>
                                    <a href="#!" className="flex items-center truncate">
                                        <div className="flex text-lg tracking-wide card-title text-base-content opacity-60">
                                            <FaLink className="my-auto" />
                                            <span className="hover:text-blue-500">{item.name}</span>
                                        </div>
                                    </a>
                                    <p className="mt-1 mb-5 text-sm text-base-content text-opacity-60">{item.description}</p>
                                </div>
                                <div className="flex justify-end text-sm truncate text-base-content text-opacity-60">
                                    <div>
                                        <span className="flex items-center">
                                            <AiOutlineStar className="mr-1" />
                                            {item.tags.join(', ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}