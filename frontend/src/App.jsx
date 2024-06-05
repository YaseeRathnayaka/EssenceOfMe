import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-gray-200 bg-gray-900">
      <div className="fixed top-0 w-full h-full -z-10"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        
      </div>
      <Footer />
    </div>
  );
};

export default App;
