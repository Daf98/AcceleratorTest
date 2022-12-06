import { Link } from "gatsby";
import React from "react";
import { gridContainer, gridItem, cardList, cardButton } from "./card.module.css";

const Card = () => {
  const cards = [
    {
      title: "Incubator/Accelerator",
      img: "../images/Team.png",
    },
    {
      title: "Corporations",
      img: "../images/Engage.png",
    },
    {
      title: "Investor",
      img: "../images/Engage.png",
    },
    {
      title: "Startup",
      img: "../images/Engage.png",
    },
    {
      title: "Open Challenge",
      img: "../images/Engage.png",
    },
  ];
  return (
    <>
    <div className={gridContainer}>
      {cards.map((card) => {
        return (
            <div className={gridItem} key={card.title}>
              <div>
                <h3>{card.title}</h3>
                <img src={card.img} alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sollicitudin arcu a justo vehicula, eget sagittis turpis molestie.</p>
              <hr />
              <h4>Popular Features</h4>
              <ul className={cardList}>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
              <Link to="/" className={cardButton} >Get Started</Link>
            </div>
          
        );
      })}
      </div>
    </>
  );
};

export default Card;
