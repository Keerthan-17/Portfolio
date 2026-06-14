function About() {
    const skills = [
        "Python", "JavaScript (ES6+)", "TypeScript", "React", "Node.js", 
        "Express", "Flask", "Django", "SQL / NoSQL", "Git / GitHub"
    ];

    return (
        <section id="about" className="section-container" data-name="about" data-file="components/About.js">
            <Reveal>
                <h2 className="section-title">
                    <span className="font-mono text-[var(--primary)] text-xl mr-2">01.</span> 
                    About Me
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="mb-4">
                            Hello! My name is Keerthan and I enjoy creating things that live on the internet. My interest in software engineering started back in high school and has evolved into a passion for building scalable applications and AI-driven solutions.
                        </p>
                        <p className="mb-4">
                            I am currently pursuing my <span className="text-[var(--primary)]">Bachelor of Engineering in Computer Science and Engineering (Data Science)</span> at AMC Engineering College, expecting to graduate in 2026.
                        </p>
                        <p className="mb-6">
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                            {skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-400">
                                    <span className="text-[var(--primary)] text-xs">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="relative w-full max-w-[340px] mx-auto md:mx-0 mt-8 md:mt-0">
                        {/* Profile Image with Coder Vibe */}
                        <div className="relative group rounded-xl overflow-hidden bg-[var(--primary)]/20 border border-slate-800 hover:border-[var(--primary)] transition-colors duration-500 w-[85%] ml-auto">
                            {/* Cyan/Tech filter overlay */}
                            <div className="absolute inset-0 bg-[var(--primary)] mix-blend-multiply opacity-40 group-hover:opacity-0 transition-all duration-500 z-10 pointer-events-none"></div>
                            
                            {/* Inner glowing frame on hover */}
                            <div className="absolute inset-0 border-2 border-[var(--primary)] rounded-xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 z-20 pointer-events-none"></div>
                            
                            <img 
                                src="assets/profile_pic.png"
                                alt="Keerthan M" 
                                className="w-full h-auto aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            
                            {/* Decorative tech corners */}
                            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[var(--primary)] z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[var(--primary)] z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                        </div>

                        {/* Terminal Window Mockup Overlapping */}
                        <div className="md:absolute relative mt-[-2rem] md:mt-0 md:-bottom-8 md:-left-8 w-[95%] md:w-[280px] card flex flex-col font-mono text-xs overflow-hidden z-30 bg-[var(--bg-dark)]/95 backdrop-blur shadow-2xl border-slate-700 p-4">
                            <div className="flex gap-2 items-center border-b border-slate-700 pb-2 mb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-slate-500 text-[10px]">keerthan@portfolio:~</span>
                            </div>
                            <div className="flex-1 text-[11px] leading-tight">
                                <div className="mb-1.5"><span className="text-[var(--primary)]">$</span> whoami</div>
                                <div className="text-slate-400 mb-3">Keerthan M - Aspiring Software Engineer</div>
                                
                                <div className="mb-1.5"><span className="text-[var(--primary)]">$</span> cat education.txt</div>
                                <div className="text-slate-400 mb-3">
                                    B.E. in CSE (Data Science)<br/>
                                    AMC Engineering College<br/>
                                    2022 - 2026
                                </div>

                                <div className="mt-2 flex items-center">
                                    <span className="text-[var(--primary)]">$</span> <span className="w-1.5 h-3 bg-slate-400 animate-pulse ml-1 inline-block"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}