import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Techno from './Components/Techno';
import Exo from './Components/Exo';
import Proj from './Components/Proj';
import Contacts from './Components/Contacts';
// import CursorGlow from './Components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-neutral-200 selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      {/* <CursorGlow /> */}
      {/* Background radial gradient mesh */}
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#030712_40%,#4c1d95_100%)] opacity-40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/10 blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[140px] pointer-events-none"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative">
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Techno />
          <Exo />
          <Proj />
          <Contacts />
        </main>
      </div>
    </div>
  );
}

export default App;
