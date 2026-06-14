function Footer() {
    const [copied, setCopied] = React.useState(false);
    const email = "keerthankulal17@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 text-center px-6" data-name="footer" data-file="components/Footer.js">
            <Reveal>
                <div className="max-w-2xl mx-auto mb-20">
                    <h2 className="font-mono text-[var(--primary)] mb-4">04. What's Next?</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-heading)]">Get In Touch</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="https://drive.google.com/drive/folders/14g4xutzTUNckvlUHpVI7-4Wv0e3SMkmn?usp=sharing" target="_blank" className="px-8 py-4 rounded bg-[var(--primary)] text-slate-900 font-mono font-bold hover:bg-cyan-300 transition-colors flex items-center gap-2 min-w-[200px] justify-center">
                            <div className="icon-download text-lg"></div>
                            Download CV
                        </a>
                        <button 
                            onClick={handleCopyEmail} 
                            className="px-8 py-4 rounded border border-[var(--primary)] text-[var(--primary)] font-mono hover:bg-[var(--primary)]/10 transition-colors flex items-center gap-2 min-w-[200px] justify-center"
                        >
                            <div className={`icon-${copied ? 'check' : 'copy'} text-lg`}></div>
                            {copied ? 'Email Copied!' : 'Copy Email ID'}
                        </button>
                    </div>
                </div>

                <div className="font-mono text-sm text-slate-500 flex flex-col items-center gap-2">
                    <div className="flex gap-4 mb-2">
                        <a href="https://github.com/Keerthan-17" target="_blank" className="hover:text-[var(--primary)] transition-colors"><div className="icon-github text-xl"></div></a>
                        <a href="https://www.linkedin.com/in/keerthan-m-kulal/" target="_blank" className="hover:text-[var(--primary)] transition-colors"><div className="icon-linkedin text-xl"></div></a>
                        <a href="mailto:keerthankulal17@gmail.com" className="hover:text-[var(--primary)] transition-colors"><div className="icon-mail text-xl"></div></a>
                    </div>
                    <p>Designed & Built by Keerthan M</p>
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </Reveal>
        </section>
    );
}