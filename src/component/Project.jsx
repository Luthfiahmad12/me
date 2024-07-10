import { AiOutlineStar } from "react-icons/ai"
import { FaLink } from "react-icons/fa6";

const projects = [
    {
        name: "E-commerce Kedai MsCoffe",
        link: "#",
        description: "This is project 1",
        tags: ['PHP', 'laravel', 'Jquery Ajax', 'MySQl']
    },
    {
        name: "Berkah Mandiri Sayur",
        link: "#",
        description: "This is project 2",
        tags: ['PHP', 'Laravel', 'MySQL']
    },
    {
        name: "Sistem Pakar",
        link: "#",
        description: "This is project 3",
        tags: ['PHP', 'Jquery Ajax', 'MySQL']
    },
    {
        name: "Sistem Reseller Carica",
        link: "#",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus. Iste, natus.",
        tags: ['PHP', 'Laravel', 'MySQL']
    },
    {
        name: "Sistem Booking Kamar Hotel",
        link: "#",
        description: "This is project 4",
        tags: ['PHP', 'Laravel', 'Jquery Ajax', 'MySQL']
    },
    {
        name: "sistem pembayaran SPP Paud",
        link: "#",
        description: "This is project 5",
        tags: ['PHP', 'laravel', 'MySQL']
    },
    {
        name: "CMS Portal Informasi Puskemas",
        link: "#",
        description: "This is project 6",
        tags: ['PHP', 'Laravel', 'Livewire', 'MySQL']
    },
    {
        name: "landing Page Profile",
        link: "#",
        description: "This is project 7",
        tags: ['React.js', 'TailwindCSS']
    },
]

export const Project = ({ className = 'w-full' }) => {
    return (
        <div className={`card bg-base-200 ${className} rounded-md shadow-xl`}>
            <div className="card-body p-6">
                <h1 className="card-title text-2xl">Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
                    {projects.map((item, index) => (
                        <div key={index} className="card bg-base-100 rounded-md shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-100 ">
                            <div className="flex justify-between flex-col p-4">
                                <div>
                                    <a href={item.link ?? '#'} target={item.link === '#' ? '' : '_blank'} className="flex items-center truncate">
                                        <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                                            <FaLink className="my-auto" />
                                            <span>{item.name}</span>
                                        </div>
                                    </a>
                                    <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">{item.description}</p>
                                </div>
                                <div className="flex justify-end text-sm text-base-content text-opacity-60 truncate">
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