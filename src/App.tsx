import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tasks from './components/Tasks';
import Schedule from './components/Schedule';
import Organizers from './components/Organizers';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tasks />
        <Schedule />
        <Organizers />
      </main>
      <Footer />
    </div>
  );
}
