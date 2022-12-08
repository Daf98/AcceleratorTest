import { Link } from "gatsby";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  featureContainer,
  gridContainer,
  gridItem,
  featureButton,
  mobileCarousel,
  featurePhoto,
  featurePhotoID,
  cardText,
} from "../components/features.module.css";

import icon1 from "../images/features/Feature1.png";
import icon2 from "../images/features/Feature2.png";
import icon3 from "../images/features/Feature3.png";
import icon4 from "../images/features/Feature4.png";
import icon5 from "../images/features/Feature5.png";
import icon6 from "../images/features/Feature6.png";
import icon7 from "../images/features/Feature7.png";
import icon8 from "../images/features/Feature8.png";

const Features = () => {
  const featureCards = [
    {
      icon: icon1,
      title: "Multilingual",
      text: "Be accessible. The application is supported in multiple languages. These includes English, French, Spanish, Deutsche, Portuguese, Arabic, Ukrainian, Bahasa, and Russian",
    },
    {
      icon: icon2,
      title: "Scheduling tools",
      text: "Liberate your time by automating integrated scheduling for your team, mentors, and experts",
    },
    {
      icon: icon3,
      title: "Smart tasks",
      text: "Drive action by assigning tasks with comprehensive segmentation capabilities",
    },
    {
      icon: icon4,
      title: "Track e-Mails",
      text: "Gain clarity by sending tracked emails from within the platform to ensure receipt and interaction",
    },
    {
      icon: icon5,
      title: "Automate your e-Mails",
      text: "Become superhuman by customizing your emails and automating communication with users throughout the platform",
    },
    {
      icon: icon6,
      title: "Calendar Integration",
      text: "Stay on top of everything by syncing your Google or Microsoft calendar with your AcceleratorApp calendar for easy, automated scheduling",
    },
    {
      icon: icon7,
      title: "Zapier Integration",
      text: "Collaborate with others by integrating your processes across departments using zapier as a bridge between AcceleratorApp and your favorite apps",
    },
    {
      icon: icon8,
      title: "And More...",
      text: "And more features integrated within the software to make your incubator/accelerator run more smoothly",
    },
  ];
  return (
    <>
      <div className={featureContainer}>
        <h2>Features integrated</h2>
        <p>Know all our features that we have to accelerate your business</p>
        <div className={gridContainer}>
          {featureCards.map((card) => {
            return (
              <div key={card.title} className={gridItem}>
                <img src={card.icon} alt="" />
                <h3>{card.title}</h3>
                <p className={cardText}>{card.text}</p>
              </div>
            );
          })}
          <Link className={featureButton} to="/features">
            Discover its functions →
          </Link>
        </div>
      </div>
      <div className={mobileCarousel}>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} centerSlidePercentage={50}>
          {featureCards.map((card) => {
            return (
              <div key={card.title} className={gridItem}>
                <div className={featurePhoto}>
                  <img id={featurePhotoID} src={card.icon} alt="" />
                </div>
                <h3>{card.title}</h3>
                <p className={cardText}>{card.text}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Features;
