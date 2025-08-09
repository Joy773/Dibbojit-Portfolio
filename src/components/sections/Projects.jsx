import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return <section id="projects" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hovershadow-[0_2px_8px_rgba(59,130,246,0.2)] transition:">
                    <h3 className="text-xl font-bold mb-2">Sams-Eatery</h3>
                    <p className="text-gray-400 mb-4">
                    Sam’s Eatery is a modern, user-friendly food ordering platform built with Next.js and Tailwind CSS. It offers a seamless browsing experience where users can explore a diverse menu of delicious dishes, customize their orders, and place them effortlessly. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Nexjs", "TailwindCss", "Redux Toolkit", "Axios"].map((tech,key) => (
                             <span
                             key={key}
                             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                             >
                                 {tech}
                             </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://sams-southern-eatery.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hovershadow-[0_2px_8px_rgba(59,130,246,0.2)] transition:">
                    <h3 className="text-xl font-bold mb-2">MovieMaze</h3>
                    <p className="text-gray-400 mb-4">
                    MovieMaze is a sleek and intuitive movie discovery web app built with React, Next.js, and Tailwind CSS. It helps users explore trending movies, search for their favorites, and dive into detailed information including trailers, cast, and reviews. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["TailwindCSS", "NextJS", "Redux Toolkit", "TMDB API"].map((tech,key) => (
                             <span
                             key={key}
                             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                             >
                                 {tech}
                             </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://movie-maze-sigma-three.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hovershadow-[0_2px_8px_rgba(59,130,246,0.2)] transition:">
                    <h3 className="text-xl font-bold mb-2">Jokify</h3>
                    <p className="text-gray-400 mb-4">
                    Discover, share, and enjoy thousands of hilarious jokes anytime, anywhere. Whether you need a quick smile or want to brighten up your day with funny one-liners, puns, or witty anecdotes, Jokify has got you covered.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "RestAPI", "Fetch",].map((tech,key) => (
                             <span
                             key={key}
                             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                             >
                                 {tech}
                             </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://joke-app-rouge-ten.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hovershadow-[0_2px_8px_rgba(59,130,246,0.2)] transition:">
                    <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
                    <p className="text-gray-400 mb-4">
                        Scalable cloud infrastructure management with real-time monitoring and automated scaling.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Socket.IO", "Express", "React", "Redis"].map((tech,key) => (
                             <span
                             key={key}
                             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                             >
                                 {tech}
                             </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}