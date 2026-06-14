function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--bg-dark)]/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-4' : 'bg-transparent py-6'}`} data-name="navbar" data-file="components/Navbar.js">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold font-mono text-[var(--text-heading)] group">
                    <span className="text-[var(--primary)]">&lt;</span>
                    KM
                    <span className="text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"> /</span>
                    <span className="text-[var(--primary)]">&gt;</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.href} className="text-sm font-mono hover:text-[var(--primary)] transition-colors">
                            <span className="text-[var(--primary)] text-xs mr-1">0{i + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                    <a href="https://drive.google.com/drive/folders/14g4xutzTUNckvlUHpVI7-4Wv0e3SMkmn?usp=sharing" target="_blank" className="px-4 py-2 rounded border border-[var(--primary)] text-[var(--primary)] font-mono text-sm hover:bg-[var(--primary)]/10 transition-colors">
                        Resume
                    </a>
                </nav>

                {/* Mobile Nav Toggle */}
                <button 
                    className="md:hidden text-[var(--primary)]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className={`icon-${menuOpen ? 'x' : 'menu'} text-2xl`}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-card)] border-b border-slate-800 shadow-xl py-4 flex flex-col items-center gap-6">
                    {navLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.href} 
                            onClick={() => setMenuOpen(false)}
                            className="text-lg font-mono hover:text-[var(--primary)]"
                        >
                            <span className="text-[var(--primary)] text-sm mr-2">0{i + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}