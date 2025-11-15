import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url: string) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio openModal={openModal} />
        <Process />
        <Testimonials />
        <Team />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
      <VideoModal isOpen={modalOpen} onClose={closeModal} videoUrl={videoUrl} />
    </div>
  );
}

export default App;
