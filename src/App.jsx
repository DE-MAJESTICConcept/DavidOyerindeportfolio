import { useState } from 'react';
import { profile } from './data/profile';
import { foundations, experience, toolkit } from './data/content';
import { projects, phases } from './data/projects';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Foundations from './components/Foundations';
import Projects from './components/Projects';
import ProjectViewer from './components/ProjectViewer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <Foundations data={foundations} />
        <Projects projects={projects} phases={phases} onOpen={setActive} />
        <Experience data={experience} />
        <Skills data={toolkit} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
      {active && <ProjectViewer project={active} onClose={() => setActive(null)} />}
    </>
  );
}
