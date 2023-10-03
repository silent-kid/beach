import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellat?",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellat?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellat?",
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellat?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div class="services-center">
          {
            this.state.services.map((item,index)=>{
              return <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>

            })
          }
        </div>
      </section>
    );
  }
}
