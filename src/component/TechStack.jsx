
export const TechStack = () => {

    const techStack = {
        name: [
            'PHP', 'Node.js', 'CSS', 'Javascript', 'React.js', 'Laravel', 'Tailwind', 'Bootstrap', 'Git', 'MySQL', 'Vite', 'VSCode'
        ]
    }

    return (
        <div className="w-full rounded-md border-lg card bg-base-100">
            <div className="p-6 card-body">
                <h1 className="text-2xl card-title">Tech Stack and Tools</h1>
                <div className="flex flex-wrap gap-4 mt-4">
                    {techStack.name.map((item, index) => (
                        <div key={index} className="transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-110 badge badge-outline text-blue-500 opacity-80">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}