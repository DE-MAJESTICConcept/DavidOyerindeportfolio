 import { useState, useEffect } from 'react';
import daMusik from './assets/da-musik.png';
import dmDesign from './assets/(0,0,0,35).png';
import nacos from './assets/“40-Day Countdown Starts NOW! .png';
import yesCard from './assets/YES.png';
import socNacos from './assets/Science Google Form Header.png';
import pamphlet from './assets/Frame 3.png'
import linkedinCarousel from './assets/Frame 1.png';
import facebookAds from './assets/royal plate.png';
import logo from "./assets/Untitled-1wdwr.svg"; 


// Animation thumbnails and videos
import an4Thumb from './assets/Screenshot 2026-03-28 050844.png';
import an4Video from './assets/2024-12-24-230421838.mp4';

import an5Thumb from './assets/Screenshot 2025-10-25 160448.png';
import an5Video from './assets/Christmas NACOSS.mp4';

import an6Thumb from './assets/Screenshot 2026-04-03 233219.png';
import an6Video from './assets/lv_0_20241128112346.mp4';

import an7Thumb from './assets/scent by tee.png';
import an7Video from './assets/VID_20241224_031524_761~2.mp4';

import an8Thumb from './assets/Uinspirer class.png';
import an8Video from './assets/Uinspirer class.mp4';

// Example for personal photo (optional)
import profilePhoto from './assets/WhatsApp Image 2026-01-29 at 02.07.54.jpeg';


/**
 * NOTE: The preview environment cannot resolve local relative paths like './assets/'.
 * For this version, we will use the property names as strings or placeholder URLs.
 * In your actual local Vite project, you can keep your original import statements.
 */

 const portfolioData = {

   title: "Creative Graphic & Motion Designer",
   name: "Oyerinde David",

   Contact: {
    phone: "+234 814 526 4181",
    Email: "oyerindedavid@gmail.com",
    address: "Kwara, Nigeria",
  },

  profilePhoto, // optional — can be used in your About page or header


   education: [
    { degree: "B.Sc. Computer Science", notes: "University of ilorin, 2020–2025" },
    // { degree: "Graphic Design", notes: "Creative Hub Academy, 2019–2020" },
    // { degree: "Motion Graphics Masterclass", notes: "Udemy, 2021" },
  ],
  certificates: [
    { degree: "Unilorin Uinspire", notes: "University of ilorin, 2025" },
    // { degree: "Graphic Design", notes: "Creative Hub Academy, 2019–2020" },
    // { degree: "Motion Graphics Masterclass", notes: "Udemy, 2021" },
  ],

  skills: {
    graphicDesign: [
      "Adobe Photoshop — expert-level proficiency in photo editing and compositing",
      "Adobe Illustrator — skilled in logo design and vector illustration",
      "CorelDRAW — experienced in print and branding layouts",
      "Typography — strong understanding of font pairing and hierarchy",
      "Color Theory — advanced knowledge of contrast and harmony principles",
    ],

    motionGraphics: [
      "Adobe After Effects — professional animation and compositing",
      "Premiere Pro — video editing and color correction",
      "Audition — basic audio syncing and sound effects",
      "Canva & Figma — rapid layout design for marketing visuals",
    ],

  

  // ✅ Add this block
  other: [
    "Team Collaboration and Project Management",
    "Creative Direction and Storyboarding",
    "Time Management and Task Prioritization",
    "Problem Solving and Adaptability",
    "Client Communication and Presentation Skills",
  ],
  
 

  
  },
  projects: {
    brandIdentity: [
      {
        id: 'bi1',
        name: 'Music Album Cover: "Celebrate"',
        category: 'Album Art / Flyer Design',
        description: 'Vibrant album cover design with bold typography and color contrast.',
        src: daMusik,
      },
      {
        id: 'bi2',
        name: 'Mc sportng Brand guid',
        category: 'Branding & Marketing',
        description: 'Promotional branding graphic showcasing creative identity.',
        src: dmDesign,
      },
      {
        id: 'bi3',
        name: 'Corporate Brochure Layout',
        category: 'Print Design',
        description: 'Elegant tri-fold brochure layout for NACOSS Corporate Event.',
        src: pamphlet,
      },
      {
        id: 'bi4',
        name: 'Yosola Electrical Services Business Card',
        category: 'Business Card Design',
        description: 'Professional business card design for Yosola Electrical Services.',
        src: yesCard,
      },
    ],

    animations: [
      {
        id: 'an4',
        title: 'logo animation',
        thumbnail: an4Thumb,
        videoUrl: an4Video,
        description: 'A dynamic video teaser showcasing an upcoming event.',
      },
      {
        id: 'an5',
        title: 'Christmas NACOSS Celebration',
        thumbnail: an5Thumb,
        videoUrl: an5Video,
        description: 'A festive animation celebrating NACOSS Christmas event.',
      },
      {
        id: 'an6',
        title: 'Explainer video',
        thumbnail: an6Thumb,
        videoUrl: an6Video,
        description: 'An abstract motion graphic piece showcasing smooth transitions.',
      },
      {
        id: 'an7',
        title: 'Promotional Clip - VID_20241224',
        thumbnail: an7Thumb,
        videoUrl: an7Video,
        description: 'A short promotional clip highlighting NACOSS achievements.',
      },
      {
        id: 'an8',
        title: 'Uinspirer Class',
        thumbnail: an8Thumb,
        videoUrl: an8Video,
        description: 'A short promotional clip highlighting the Uinspirer class.',
      },
    ],

    socialMediaGraphics: [
      {
        id: 'sm1',
        name: ' AIRAIDE AI master class Goole form',
        category: 'Social Media Graphics',
        description: 'Engaging design promoting NACOSS Data Science Awareness.',
        src: socNacos,
      },
      {
        id: 'sm2',
        name: '“ Nigeria ACT 2025 40-Day Countdown ',
        category: 'Social Media Graphics',
        description: 'Promotional post encouraging creative merch submissions.',
        src: nacos,
      },
      {
        id: 'sm3',
        name: 'Facebook Ad Set',
        category: 'Facebook Ads',
        description: 'Ad creatives designed for optimized Facebook engagement.',
        src: facebookAds,
      },
      {
        id: 'sm4',
        name: 'LinkedIn Carousel',
        category: 'LinkedIn',
        description: 'Professional carousel design tailored for LinkedIn marketing.',
        src: linkedinCarousel,
      },
    ],
  },
};

// --- Main App Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openVideoModal = (video) => setSelectedVideo(video);
  const closeVideoModal = () => setSelectedVideo(null);

  const openImageModal = (image) => setSelectedImage(image);
  const closeImageModal = () => setSelectedImage(null);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section id="hero" className="d-flex align-items-center justify-content-center min-vh-100 bg-black text-white py-5">
              <div className="container text-center py-5">
                <h1 className="display-3 fw-bolder lh-tight p-4 bg-dark-custom bg-opacity-75 shadow-lg-custom rounded-xl">
                  Welcome, I'm <span className="text-gold">{portfolioData.name}</span>
                </h1>
                <p className="fs-2 fw-light rounded-xl p-3 bg-dark-custom bg-opacity-75 mt-4">
                  A <span className="fw-semibold text-white">{portfolioData.title}</span>
                </p>
                <a href="#projects" className="btn btn-gold btn-lg rounded-pill mt-5 px-5 py-3 shadow-lg-custom">Connect With Me</a>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-dark-custom border-top border-bottom border-dark-subtle">
              <div className="container py-5">
                <h2 className="display-4 fw-bold text-center text-gold mb-5 pb-4 border-bottom border-gold">About My Craft</h2>
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <img
                      src={portfolioData.profilePhoto}
                      alt="Oyerinde David"
                      className="img-fluid rounded-circle shadow-lg-custom border border-dark-subtle d-block mx-auto"
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = "https://via.placeholder.com/300/1a1a1a/FFD700?text=Profile"; }}
                    />
                  </div>
                  <div className="col-md-6 text-secondary">
                    <p className="fs-5">{portfolioData.summary}</p>
                    <p className="fs-5">My journey in design began with a fervent passion for crafting compelling visual narratives. I've refined my expertise in both static and motion graphics.</p>
                    <h3 className="fs-3 fw-semibold text-white mt-5">My Training</h3>
                    <ul className="list-unstyled ps-4">
                      {portfolioData.education.map((edu, i) => (
                        <li key={i} className="mb-2"><span className="text-gold me-2">•</span> <span className="text-white fw-bold">{edu.degree}</span> {edu.notes}</li>
                      ))}
                    </ul>
                     <ul className="list-unstyled ps-4">
                      {portfolioData.certificates.map((cert, i) => (
                        <li key={i} className="mb-2"><span className="text-gold me-2">•</span> <span className="text-white fw-bold">{cert.degree}</span> {cert.notes}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Navigation */}
            <section id="projects" className="py-5 bg-black">
              <div className="container py-5">
                <h2 className="display-4 fw-bold text-center text-gold mb-5 border-bottom border-gold pb-4">My Creations</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                  <PortfolioCategoryCard title="Brand Identity & Print" icon="🎨" description="Flyers, brochures, and branding." onClick={() => setCurrentPage('brandIdentity')} />
                  <PortfolioCategoryCard title="Motion Graphics" icon="🎬" description="Motion graphics and visual storytelling." onClick={() => setCurrentPage('animations')} />
                  <PortfolioCategoryCard title="Social Media Graphics" icon="📱" description="Engaging visuals for digital campaigns." onClick={() => setCurrentPage('socialMediaGraphics')} />
                </div>
              </div>
            </section>
          </>
        );
      case 'brandIdentity':
        return <BrandIdentityGallery projects={portfolioData.projects.brandIdentity} onBack={() => setCurrentPage('home')} onViewImage={openImageModal} />;
      case 'animations':
        return <AnimationGallery projects={portfolioData.projects.animations} onBack={() => setCurrentPage('home')} onPlayVideo={openVideoModal} />;
      case 'socialMediaGraphics':
        return <SocialMediaGraphicsGallery projects={portfolioData.projects.socialMediaGraphics} onBack={() => setCurrentPage('home')} onViewImage={openImageModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white min-vh-100" style={{ fontFamily: 'Inter, sans-serif' }}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <style>{`
        .text-gold { color: #FFD700; }
        .bg-dark-custom { background-color: #1a1a1a !important; }
        .bg-darker-custom { background-color: #212121 !important; }
        .border-gold { border-color: #FFD700 !important; }
        .btn-gold { background-color: #FFD700; color: #000; font-weight: bold; border: none; transition: 0.3s; }
        .btn-gold:hover { filter: brightness(0.9); transform: scale(1.05); color: #000; }
        .card-custom { transition: 0.3s ease; cursor: pointer; }
        .card-custom:hover { transform: translateY(-5px); border-color: #FFD700 !important; }
        .rounded-xl { border-radius: 1rem !important; }
        .shadow-lg-custom { box-shadow: 0 1rem 3rem rgba(0,0,0,0.7) !important; }
        .cursor-pointer { cursor: pointer; }
        .hover-gold:hover { color: #FFD700 !important; }
      `}</style>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-black sticky-top border-bottom border-dark-subtle py-3">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center rounded-xl px-3 py-2 hover-gold"
            href="#"
            onClick={() => setCurrentPage('home')}
          >
            <img
              src={logo}
              alt="Portfolio Logo"
              style={{ height: "60px", width: "60px", borderRadius: "0", objectFit: "cover", alignItems:"center" }}
            />
          </a>
          <div className="d-flex gap-3">
            <button onClick={() => setCurrentPage('home')} className="btn btn-link text-white text-decoration-none">Home</button>
            <a href="#about" className="btn btn-link text-white text-decoration-none d-none d-md-block">About</a>
            <a href="#projects" className="btn btn-link text-white text-decoration-none d-none d-md-block">Portfolio</a>
          </div>
        </div>
      </nav>

      {renderContent()}

      {/* Modals */}
      {selectedVideo && <VideoModal video={selectedVideo} onClose={closeVideoModal} />}
      {selectedImage && <ImageModal asset={selectedImage} onClose={closeImageModal} />}

      {/* Footer */}
      <footer id="contact" className="py-5 text-center border-top border-dark-subtle mt-5">
        <div className="container">
          <h2 className="text-gold mb-4">Get In Touch</h2>
          <p className="text-secondary mb-1">{portfolioData.Contact.Email}</p>
          <p className="text-secondary mb-4">{portfolioData.Contact.phone}</p>
          <p className="text-secondary">&copy; {new Date().getFullYear()} Oyerinde David. Creative Excellence.</p>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <i className="fab fa-linkedin-in text-secondary hover-gold cursor-pointer fs-4" onClick={() => window.location.href='https://www.linkedin.com/in/oyerinde-david-7324b2298?utm_source=share_via&utm_content=profile&utm_medium=member_android'}></i>
            <i className="fab fa-behance text-secondary hover-gold cursor-pointer fs-4" onClick={() => window.location.href='https://www.behance.net/demajesticdesign'}></i>
            <i className="fab fa-instagram text-secondary hover-gold cursor-pointer fs-4" onClick={() => window.location.href='https://www.instagram.com/da_musik_offical?igsh=b3ltcmFib25mbnFi'}></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Internal Components ---

const PortfolioCategoryCard = ({ title, icon, description, onClick }) => (
  <div className="col">
    <div className="card h-100 bg-darker-custom rounded-xl shadow-lg-custom card-custom border border-dark-subtle text-center p-4" onClick={onClick}>
      <div className="fs-1 mb-3">{icon}</div>
      <h3 className="text-white fs-4">{title}</h3>
      <p className="text-secondary">{description}</p>
      <button className="btn btn-gold rounded-pill mt-3">View Projects</button>
    </div>
  </div>
);

const DesignCard = ({ asset, onClick }) => (
  <div className="col">
    <div className="card h-100 bg-darker-custom rounded-xl card-custom border border-dark-subtle overflow-hidden" onClick={() => onClick(asset)}>
      <img src={asset.src} alt={asset.name} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} 
           onError={(e) => { e.target.src = "https://via.placeholder.com/400x300/212121/FFD700?text=Design+Asset"; }} />
      <div className="card-body">
        <h5 className="text-white mb-1">{asset.name}</h5>
        <p className="text-gold small mb-2">{asset.category}</p>
        <p className="text-secondary small">{asset.description}</p>
      </div>
    </div>
  </div>
);

const VideoPlaceholder = ({ video, onPlay }) => (
  <div className="col">
    <div className="card h-100 bg-darker-custom rounded-xl card-custom border border-dark-subtle overflow-hidden" onClick={() => onPlay(video)}>
      <div className="position-relative">
        <img src={video.thumbnail} alt={video.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle bg-black bg-opacity-75 rounded-circle p-3">
          <svg className="text-gold" width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div className="card-body">
        <h5 className="text-white">{video.title}</h5>
        <p className="text-secondary small">{video.description}</p>
      </div>
    </div>
  </div>
);

const BrandIdentityGallery = ({ projects, onBack, onViewImage }) => (
  <section className="py-5 bg-black min-vh-100">
    <div className="container">
      <button onClick={onBack} className="btn btn-outline-secondary rounded-pill mb-4"><i className="fas fa-arrow-left me-2"></i> Back</button>
      <h2 className="text-gold mb-5 text-center display-5 fw-bold">Brand Identity</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((p) => <DesignCard key={p.id} asset={p} onClick={onViewImage} />)}
      </div>
    </div>
  </section>
);

const AnimationGallery = ({ projects, onBack, onPlayVideo }) => (
  <section className="py-5 bg-black min-vh-100">
    <div className="container">
      <button onClick={onBack} className="btn btn-outline-secondary rounded-pill mb-4"><i className="fas fa-arrow-left me-2"></i> Back</button>
      <h2 className="text-gold mb-5 text-center display-5 fw-bold">Motion Graphics</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((v) => <VideoPlaceholder key={v.id} video={v} onPlay={onPlayVideo} />)}
      </div>
    </div>
  </section>
);

const SocialMediaGraphicsGallery = ({ projects, onBack, onViewImage }) => (
  <section className="py-5 bg-black min-vh-100">
    <div className="container">
      <button onClick={onBack} className="btn btn-outline-secondary rounded-pill mb-4"><i className="fas fa-arrow-left me-2"></i> Back</button>
      <h2 className="text-gold mb-5 text-center display-5 fw-bold">Social Media</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((p) => <DesignCard key={p.id} asset={p} onClick={onViewImage} />)}
      </div>
    </div>
  </section>
);

const VideoModal = ({ video, onClose }) => (
  <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.9)', zIndex: 2000 }} onClick={onClose}>
    <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
      <div className="modal-content bg-dark border-dark-subtle rounded-xl overflow-hidden">
        <div className="modal-header border-0 pb-0">
          <h5 className="text-gold">{video.title}</h5>
          <button className="btn-close btn-close-white" onClick={onClose}></button>
        </div>
        <div className="modal-body p-0">
          {video.videoUrl ? (
            <video src={video.videoUrl} controls autoPlay className="w-100"></video>
          ) : (
            <div className="bg-dark p-5 text-center">
              <p className="text-white">Video preview not available in this environment.</p>
              <p className="text-secondary small">Local file: {video.title}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ImageModal = ({ asset, onClose }) => (
  <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.9)', zIndex: 2000 }} onClick={onClose}>
    <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
      <div className="modal-content bg-darker-custom border-dark-subtle rounded-xl overflow-hidden shadow-lg-custom">
        <div className="modal-header border-0 pb-0">
          <h5 className="text-gold">{asset.name}</h5>
          <button className="btn-close btn-close-white" onClick={onClose}></button>
        </div>
        <div className="modal-body text-center p-4">
          <img src={asset.src} alt={asset.name} className="img-fluid rounded mb-3" style={{ maxHeight: '70vh' }} />
          <p className="text-secondary">{asset.description}</p>
          <span className="badge bg-gold text-dark">{asset.category}</span>
        </div>
      </div>
    </div>
  </div>
);

