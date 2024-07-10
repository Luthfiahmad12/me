
export const TechStack = () => {

    const techStack = {
        name: [
            'PHP', 'Node.js', 'CSS', 'Javascript', 'React.js', 'Laravel', 'Tailwind', 'Bootstrap', 'Git', 'MySQL', 'Vite', 'VSCode'
        ]
    }

    return (
        <div className="card bg-base-100 shadow-lg rounded-md w-full">
            <div className="card-body p-6">
                <h1 className="card-title text-2xl">Tech Stack and Tools</h1>
                <div className="flex flex-wrap gap-4 mt-4">
                    {techStack.name.map((item, index) => (
                        <div key={index} className="badge badge-outline cursor-pointer hover:scale-105 transition hover:-translate-y-2 duration-300 ease-in-out">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}