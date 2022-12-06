import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../images/Germany.png";
import image2 from "../images/Client.png";
import { Link } from "gatsby";
import {
  clientContainer,
  clientPhoto,
  clientCarousel,
  clientPhotoID,
} from "./clients.module.css";

const Clients = () => {
  return (
    <div className={clientContainer}>
      <div>
        <h1>What our customers say</h1>
        <Link to="/customers">
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
  );
};

export default Clients;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
