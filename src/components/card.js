import React from "react";

const Card = () => {
  const cards = [
    {
      title: "Incubator",
      img: "../images/Team.png"
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
      {cards.map((card) => {
        return (
          <div key={card.title}>
            <p>{card.title}</p>
            <img src={card.img} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Card;
