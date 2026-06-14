function Loader({ onComplete }) {
    const [text, setText] = React.useState('');
    const [isFadingOut, setIsFadingOut] = React.useState(false);
    
    const fullText = `> Initializing portfolio...
> Loading web applications...
> Connecting AI services...
> Fetching project data...
> System ready.
> Welcome to my portfolio.`;
    
    React.useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(timer);
                setTimeout(() => {
                    setIsFadingOut(true);
                    setTimeout(onComplete, 500); // Wait for fade out animation
                }, 800);
            }
        }, 20); // Typing speed
        
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div 
            className={`fixed inset-0 z-[100] bg-[var(--bg-dark)] flex items-center justify-center transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
            data-name="loader" 
            data-file="components/Loader.js"
        >
            <div className="font-mono text-[var(--primary)] text-sm md:text-base max-w-lg w-full px-6 whitespace-pre-line">
                {text}<span className="animate-pulse">_</span>
            </div>
        </div>
    );
}