import HeroSection2 from '../components/HeroSection2';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrainingThemesSection from '../components/TrainingThemesSection';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TrainingThemes() {
  const [trainingThemes, setTrainingThemes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8800/training-themes')
            .then(response => {
                setTrainingThemes(response.data);
            })
            .catch(error => {
              console.error('Error fetching articles:', error);
            });
    }, []);
  return (
    <div className="relative bg-variant-white flex flex-col gap-12">
        <Header />
        <HeroSection2 
            Image="/images/tablet-with-smartphone-devices-tech-generative-ai 1.png"
            Titre={<>Training <span className="text-main-blue">themes</span></>}
        />
        {trainingThemes.map((Theme, index) => (
          <TrainingThemesSection 
            key={index}
            Title={Theme.title}
            Themes={Theme.themes}
          />
        ))}
        <Footer />
    </div>
  )
}

export default TrainingThemes