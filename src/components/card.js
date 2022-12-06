import { Link } from "gatsby";
import React from "react";
import {
  gridContainer,
  gridItem,
  cardList,
  cardButton,
  gridContent,
} from "./card.module.css";
import icon1 from "../images/cards/Interactive.png";
import icon2 from "../images/cards/Team.png";
import icon3 from "../images/cards/Rocket.png";
import icon4 from "../images/cards/ActualRocket.png";
import icon5 from "../images/cards/Engage.png";

const Card = () => {
  const cards = [
    {
      title: "Incubator/Accelerator",
      img: icon1,
    },
    {
      title: "Corporations",
      img: icon2,
    },
    {
      title: "Investor",
      img: icon3,
    },
    {
      title: "Startup",
      img: icon4,
    },
    {
      title: "Open Challenge",
      img: icon5,
    },
  ];
  return (
    <>
      <div className={gridContainer}>
        {cards.map((card) => {
          return (
            <div className={gridItem} key={card.title}>
              <div className={gridContent}>
                <img src={card.img} alt="" />
                <h3>{card.title}</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sollicitudin arcu a justo vehicula, eget sagittis
                turpis molestie.
              </p>
              <hr />
              <h4>Popular Features</h4>
              <ul className={cardList}>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
              <Link to="/" className={cardButton}>
                Get Started
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
