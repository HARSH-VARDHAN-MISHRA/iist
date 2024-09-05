import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

import Carasol from '../../Components/Carasol/Carasol';
import Gallery from '../../Components/Gallery/Gallery';

// Skill Traning Images
import hospitalParamedical from '../../Assets/skill-traning-program/hospital-paramedical.jpg';
import teacherTraining from '../../Assets/skill-traning-program/teacher-training.jpg';
import technicalSkill from '../../Assets/skill-traning-program/technical-skill.jpg';
import cuttingTailoring from '../../Assets/skill-traning-program/cutting-tailoring.jpg';
import safetyManagement from '../../Assets/skill-traning-program/safety-management.jpg';
import industrialSkillTraining from '../../Assets/skill-traning-program/industrial-skill-training.jpg';
import engineeringTraining from '../../Assets/skill-traning-program/engineering-training.webp';
import spokenEnglishPersonalityDevelopment from '../../Assets/skill-traning-program/spoken-english-personality-development.webp';


// vocational Programs
import hotelTourTravelManagement from '../../Assets/vocational-program/hotel-tour-travel-management.jpg';
import businessManagement from '../../Assets/vocational-program/business-management.webp';
import fashionInteriorTextileDesigning from '../../Assets/vocational-program/fashion-interior-textile-designing.webp';
import beautyWellness from '../../Assets/vocational-program/beauty-wellness.jpeg';
import computerIT from '../../Assets/vocational-program/computer-information-technology.jpeg';
import artsPainting from '../../Assets/vocational-program/arts-painting.jpg';

const skillTrainingPrograms = [
  { title: 'Hospital & Paramedical', imgSrc: hospitalParamedical, link: '/hospital-paramedical' },
  { title: 'Teacher Training', imgSrc: teacherTraining, link: '/teacher-training' },
  { title: 'Technical Skill', imgSrc: technicalSkill, link: '/technical-skill' },
  { title: 'Cutting & Tailoring', imgSrc: cuttingTailoring, link: '/cutting-tailoring' },
  { title: 'Safety Management', imgSrc: safetyManagement, link: '/safety-management' },
  { title: 'Industrial Skill Training', imgSrc: industrialSkillTraining, link: '/industrial-skill-training' },
  { title: 'Engineering Training Programs', imgSrc: engineeringTraining, link: '/engineering-training' },
  { title: 'Spoken English & Personality Development', imgSrc: spokenEnglishPersonalityDevelopment, link: '/spoken-english-personality-development' },
];

const vocationalPrograms = [
  { title: 'Hotel  Tour & Travel Management', imgSrc: hotelTourTravelManagement, link: '/hotel-tour-management' },
  { title: 'Business Management', imgSrc: businessManagement, link: '/business-management' },
  { title: 'Fashion Interior Textile Designing', imgSrc: fashionInteriorTextileDesigning, link: '/fashion-interior-textile-designing' },
  { title: 'Beauty & Wellness', imgSrc: beautyWellness, link: '/beauty-wellness' },
  { title: 'Computer & Information Technology', imgSrc: computerIT, link: '/computer-it' },
  { title: 'Arts & Painting', imgSrc: artsPainting, link: '/arts-painting' },
];

const Home = () => {
  return (
    <>
      <Carasol />

      <div className="container my-5">
        <h2 className="section-title">Our Gallery</h2>
        <Gallery />
      </div>

      <section className='container my-5'>
        <div className="programs">
          <h2 className="section-title">Skill Training Programs</h2>
          <div className="program-list">
            {skillTrainingPrograms.map((program, index) => (
              <Link to={program.link} className="program-item" key={index}>
                <img src={program.imgSrc} alt={program.title} className="program-img" />
                <h3>{program.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='container my-5'>
        <div className="programs vocational-programs">
          <h2 className="section-title">Vocational Programs</h2>
          <div className="program-list">
            {vocationalPrograms.map((program, index) => (
              <Link to={program.link} className="program-item" key={index}>
                <img src={program.imgSrc} alt={program.title} className="program-img" />
                <h3>{program.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='container'>
        <div className="placement-cell">
          <h2 className="section-title">Placement Cell</h2>
          <div className="placement-actions">
            <Link to="/click-here" className="btn">Click here</Link>
            <Link to="/centre-login" className="btn">Centre Login</Link>
            <Link to="/online-results" className="btn">Online Results</Link>
            <Link to="/centre-invitation" className="btn">Centre Invitation</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
