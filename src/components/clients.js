import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../images/Germany.png";
import { Link } from "gatsby";
import {
  clientContainer,
  clientSpeech,
  AccIncubators,
  clientPhoto,
  clientCarousel,
  clientPhotoID,
  callToAction,
  clientPar,
  demoRequest,
  contactButton,
  actionButtons
} from "./clients.module.css";

const Clients = () => {
  return (
    <>
    <div className={clientContainer}>
      <div className={clientSpeech}>
        <h1>What our customers say</h1>
        <Link to="/customers" className={AccIncubators}>
          150+ incubators/accelerators using AcceleratorApp
        </Link>
      </div>
      <Carousel showThumbs={false} showArrows={false}>
        <div>
          <p className={clientCarousel}>
            "AcceleratorApp has helped us a lot to accelerate and optimize our
            application and selection process. We got very positive feedback
            from our team and applicants. It's a great tool for every company
            reviewing and processing a large number of applications whilst
            minimizing manual work. The tool is customizable, user-friendly and
            the AcceleratorApp team is very responsive and supportive!"
          </p>
          <p className={clientCarousel}>
            François Jolly, Director of Programs • Startup lab
          </p>
          <div className={clientPhoto}>
            <img src={image} alt="Client" id={clientPhotoID} />
          </div>
        </div>
        <div>
          <p className={clientCarousel}>
            "AcceleratorApp has helped us a lot to accelerate and optimize our
            application and selection process. We got very positive feedback
            from our team and applicants. It's a great tool for every company
            reviewing and processing a large number of applications whilst
            minimizing manual work. The tool is customizable, user-friendly and
            the AcceleratorApp team is very responsive and supportive!"
          </p>
          <p className={clientCarousel}>
            François Jolly, Director of Programs • Startup lab
          </p>
          <div className={clientPhoto}>
            <img src={image} alt="Client" id={clientPhotoID} />
          </div>
        </div>
        <div>
          <p className={clientCarousel}>
            "AcceleratorApp has helped us a lot to accelerate and optimize our
            application and selection process. We got very positive feedback
            from our team and applicants. It's a great tool for every company
            reviewing and processing a large number of applications whilst
            minimizing manual work. The tool is customizable, user-friendly and
            the AcceleratorApp team is very responsive and supportive!"
          </p>
          <p className={clientCarousel}>
            François Jolly, Director of Programs • Startup lab
          </p>
          <div className={clientPhoto}>
            <img src={image} alt="Client" id={clientPhotoID} />
          </div>
        </div>
      </Carousel>
    </div>
    <div className={callToAction}>
        <p id={clientPar}>What are you waiting for?</p>
        <h1>Join +150 companies that already trust us for their growth</h1>
        <div className={actionButtons}>
        <Link to="/demo-request" id={demoRequest}>Request a Demo</Link>
        <Link to="/contact" id={contactButton}>Contact Us</Link>
        </div>
    </div>
    </>
  );
};

export default Clients;