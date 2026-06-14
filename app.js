// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-300">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Compilation Error</h1>
            <p className="text-slate-400 mb-4 font-mono">{this.state.error.toString()}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded border border-cyan-400 text-cyan-400 font-mono hover:bg-cyan-400/10"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [loading, setLoading] = React.useState(true);

  try {
    return (
      <div className="relative" data-name="app" data-file="app.js">
        {loading ? (
            <Loader onComplete={() => setLoading(false)} />
        ) : (
            <React.Fragment>
                <Navbar />
                <div className="animate-fade-in-up">
                    <main>
                      <Hero />
                      <About />
                      <Experience />
                      <Projects />
                    </main>
                    <Footer />
                </div>
                
                {/* Email Sidebar for larger screens */}
                <div className="hidden md:block fixed bottom-0 right-10 w-10 z-50 animate-fade-in-up-delay-3">
                    <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-500 after:mt-4">
                        <a href="mailto:keerthankulal17@gmail.com" className="font-mono text-sm tracking-[0.1em] text-slate-400 hover:text-[var(--primary)] transition-colors hover:-translate-y-1" style={{ writingMode: 'vertical-rl' }}>
                            keerthankulal17@gmail.com
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);