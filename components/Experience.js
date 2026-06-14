function Experience() {
    return (
        <section id="experience" className="section-container max-w-3xl" data-name="experience" data-file="components/Experience.js">
            <Reveal>
                <h2 className="section-title">
                    <span className="font-mono text-[var(--primary)] text-xl mr-2">02.</span> 
                    Where I've Worked
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Vertical Tabs Mockup - simple version for 1 experience */}
                    <div className="flex md:flex-col overflow-x-auto md:w-32 border-b md:border-b-0 md:border-l border-slate-800">
                        <button className="px-4 py-3 text-sm font-mono text-left text-[var(--primary)] border-b-2 md:border-b-0 md:border-l-2 border-[var(--primary)] bg-[var(--primary)]/10 md:-ml-[2px] transition-all whitespace-nowrap">
                            Freelance
                        </button>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-semibold">
                            Web Developer <span className="text-[var(--primary)]">@ Wanderingmat</span>
                        </h3>
                        <p className="text-sm font-mono text-slate-400 mb-4 mt-1">October 2024 - Present</p>
                        
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex gap-4 items-start">
                                <span className="text-[var(--primary)] mt-1 text-sm">▹</span>
                                <p>Designed and customized Kajabi websites, funnels, and landing pages aligned with client branding and course requirements.</p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-[var(--primary)] mt-1 text-sm">▹</span>
                                <p>Implemented automation workflows, email sequences, and membership settings to streamline client onboarding and improve user experience.</p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-[var(--primary)] mt-1 text-sm">▹</span>
                                <p>Managed end-to-end course setup, including product configuration, checkout pages, and content organization, ensuring a smooth learning experience for students.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}