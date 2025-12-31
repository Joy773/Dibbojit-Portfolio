import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: "GreenCart - E-commerce Website",
            description: "GreenCart is a modern, user-friendly e-commerce website built with React, and Tailwind CSS. It offers a seamless browsing experience where users can explore a diverse menu of delicious dishes, customize their orders, and place them effortlessly.",
            technologies: ["React", "Context API", "TailwindCSS", "Cloudinary", "MongoDB"],
            link: "https://green-cart-frontend-brown.vercel.app/"
        },
        {
            title: "Jokify",
            description: "Discover, share, and enjoy thousands of hilarious jokes anytime, anywhere. Whether you need a quick smile or want to brighten up your day with funny one-liners, puns, or witty anecdotes, Jokify has got you covered.",
            technologies: ["React", "RestAPI", "Fetch"],
            link: "https://joke-app-rouge-ten.vercel.app/"
        },
        {
            title: "Private Chat App",
            description: "A private chat app built with Socket.IO, Redis, NextJs, and TailwindCSS. It allows users to chat with each other in real-time.",
            technologies: ["Socket.IO", "Redis", "NextJs", "TailwindCSS", "ElysiaJS"],
            link: "https://private-chat-lime.vercel.app/"
        },
        {
            title: "Vroome - Car Rental System",
            description: "A car rental system built with React, TailwindCSS, and MongoDB. It allows users to rent a car and return it after use.",
            technologies: ["React", "TailwindCSS", "MongoDB"],
            link: "https://blog-app-green-ten.vercel.app/"
        },
        {
            title:"Blogger - Blog Website",
            description: "A blog website built with NextJS, TailwindCSS, and MongoDB. It allows users to create, read, update, and delete blogs.",
            technologies: ["NextJS", "TailwindCSS", "MongoDB"],
            link: "https://blog-app-green-ten.vercel.app/"
        }
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 2);

    return <section id="projects" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedProjects.map((project, index) => (
                    <div key={index} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hovershadow-[0_2px_8px_rgba(59,130,246,0.2)] transition:">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, key) => (
                                 <span
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                 >
                                     {tech}
                                 </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
            {!showAll && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="px-6 py-3 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all font-medium"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
        </RevealOnScroll>
    </section>;
}