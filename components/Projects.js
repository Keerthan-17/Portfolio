function Projects() {
    const projects = [
        {
            title: "Sherpa - Safety-First Navigation",
            description: "Led development of a navigation solution that generates safe routes using crime data analytics. Implemented interactive crime heatmaps and real-time incident reporting with an analytics dashboard.",
            tech: ["TypeScript", "Google Maps API", "Firebase", "Chart.js", "Material-UI"],
            github: "https://github.com/Keerthan-17/Sherpa-Navigate-Safely",
            icon: "map"
        },
        {
            title: "Ancient Script Decoded",
            description: "AI-powered system for recognizing and translating ancient Egyptian hieroglyphs from scanned images. Built end-to-end pipeline and integrated Google Gemini API for context and translations, achieving 85% accuracy.",
            tech: ["Python", "PyTorch", "React", "FastAPI", "Gemini API"],
            github: "https://github.com/Keerthan-17/ancient-decoder",
            icon: "languages"
        },
        {
            title: "VTU Result Scraper",
            description: "Automated web scraping system to extract and organize student results from the VTU portal. Built a dynamic interface for bulk retrieval and structured CSV storage for 500+ students.",
            tech: ["Python", "Selenium", "JavaScript", "HTML/CSS"],
            github: "#",
            icon: "database"
        }
    ];

    return (
        <section id="projects" className="section-container" data-name="projects" data-file="components/Projects.js">
            <Reveal>
                <h2 className="section-title">
                    <span className="font-mono text-[var(--primary)] text-xl mr-2">03.</span> 
                    Some Things I've Built
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div key={i} className="card flex flex-col h-full group">
                            <div className="flex justify-between items-center mb-6">
                                <div className="w-10 h-10 rounded bg-[var(--primary)]/10 flex items-center justify-center">
                                    <div className={`icon-${project.icon} text-2xl text-[var(--primary)]`}></div>
                                </div>
                                <div className="flex gap-3 items-center text-slate-400 group-hover:text-[var(--primary)] transition-colors">
                                    <a href={project.github} target="_blank" title="GitHub" className="hover:text-[var(--primary)]">
                                        <div className="icon-github text-xl"></div>
                                    </a>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3 text-[var(--text-heading)] group-hover:text-[var(--primary)] transition-colors">
                                <a href={project.github}>{project.title}</a>
                            </h3>
                            
                            <p className="text-slate-400 text-sm mb-6 flex-1">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, j) => (
                                    <span key={j} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold mb-4">Publications</h3>
                    <div className="card max-w-3xl mx-auto text-left border-l-4 border-l-[var(--secondary)]">
                        <p className="text-slate-400 mb-2">
                            Published two research papers in the JSS 11th National Conference on Advancements in Information Technology (NCAIT-2025):
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                            <li>"Sherpa: A Safety-Driven Navigation Platform Using Real-Time Crime Analytics and Community Reporting"</li>
                            <li>"Ancient Script Decoded: AI-Enabled Hieroglyphic-to-English Translation"</li>
                        </ul>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}