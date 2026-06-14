function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20" data-name="hero" data-file="components/Hero.js">
            <div className="max-w-5xl w-full">
                <div className="font-mono text-[var(--primary)] mb-5 animate-fade-in-up">
                    &gt; Hi, my name is
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[var(--text-heading)] animate-fade-in-up-delay-1">
                    Keerthan M.
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-400 animate-fade-in-up-delay-2">
                    Learning today, building tomorrow.
                </h2>
                <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed animate-fade-in-up-delay-2">
                    I'm an aspiring Software Engineer specializing in <span className="text-[var(--primary)]">Full Stack Development and Data Science.</span>
                    Currently building modern web applications and exploring the potential of AI-driven solutions.
                </p>
                
                <div className="flex gap-4 items-center animate-fade-in-up-delay-3">
                    <a href="#projects" className="px-8 py-4 rounded bg-[var(--primary)] text-slate-900 font-mono font-bold hover:bg-cyan-300 transition-colors flex items-center gap-2">
                        Check out my work
                        <div className="icon-arrow-right text-lg"></div>
                    </a>
                    <a href="https://github.com/Keerthan-17" target="_blank" className="p-4 rounded border border-slate-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                        <div className="icon-github text-xl"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/keerthan-m-kulal/" target="_blank" className="p-4 rounded border border-slate-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                        <div className="icon-linkedin text-xl"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}