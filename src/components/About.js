import React, { useState } from "react";
import probe from "../images/probe.jpg";
import "../CSS/About.css";
import { Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import AboutCard from "./AboutCard";

const About = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

  const handleToggle = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(-1);
    } else {
      setExpandedCardIndex(index);
    }
  };

  const cards = [
    {
      title: "Movie Rating",
      content:
        "Discover and rate the latest movies with our user-friendly movie rating app.Find movie recommendations based on your preferences and personalized ratings.Share your movie reviews and ratings with friends and the app community.Explore detailed movie information, including cast, trailers, and release dates.Get notified about upcoming movies and receive personalized recommendations.Stay up to date with trending movies and track your favorite films with our watchlist feature.",
    },
    {
      title: "ToDo App",
      content:`Stay organized and boost your productivity with our intuitive todo app.
      Create tasks, set due dates, and prioritize your to-do list for efficient planning.
      Set reminders and receive notifications to stay on top of your tasks.
      Categorize your tasks into different lists or projects for better organization.
      Collaborate with colleagues, friends, or family members by sharing tasks and lists.
      Track your progress, mark tasks as completed, and achieve your goals with satisfaction.`,
    },
    {
      title: "Shopping Cart",
      content:
        `Enjoy a seamless shopping experience with our feature-rich shopping cart app.
        Browse and search through a wide range of products from various categories.
        Add items to your cart with a single tap and easily adjust quantities.
        Save your favorite products to a wishlist for future reference.
        Securely checkout and choose from multiple payment options.
        Track your order status, receive shipment updates, and manage returns effortlessly.
        Get personalized recommendations based on your shopping history and preferences.`
    },
  ];

  return (
    <>
      <div className="probe">
        <div className="lift">
          <p className="small">We are now doing great</p>
          <h3>We give the power back to the user</h3>
          <p className="content">
            Content marketig is nothing but offering users value. It is not just
            about traffic minion customers.
          </p>
          <button className="explore">Explore Us</button>
        </div>
        <div className="right">
          <img src={probe} alt="probe" width={400} height={400} />
        </div>
      </div>

      <div className="">
        <h1>Services We provide</h1>
        <div className="clip">
          {/* {cards.map((card, index) => (
            <div className="card" key={index}>
              <h2>{card.title}</h2>
              <p>
                {expandedCardIndex === index
                  ? card.content
                  : card.content.slice(0, 100) + "..."}
              </p>
              {card.content.length > 100 && (
                <button className="explore" onClick={() => handleToggle(index)}>
                  {expandedCardIndex === index ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          ))} */}

          <Tabs defaultValue="gallery">
            <Tabs.List
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Tabs.Tab value="gallery">
                <AboutCard  title={cards[0].title} content={cards[0].content} />
              </Tabs.Tab>
              <Tabs.Tab value="messages">
                <AboutCard title={cards[1].title} content={cards[1].content} />
              </Tabs.Tab>
              <Tabs.Tab value="settings">
                <AboutCard title={cards[2].title} content={cards[2].content} />
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs" style={{textAlign: "center", padding: "40px", fontSize: ".8rem" , fontWeight: "400" , color: "#333"}}>
              {cards[0].content}
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs" style={{textAlign: "center", padding: "40px", fontSize: ".8rem" , fontWeight: "400" , color: "#333"}}>
              {cards[1].content}
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs" style={{textAlign: "center", padding: "40px", fontSize: ".8rem" , fontWeight: "400" , color: "#333"}}>
              {cards[2].content}
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default About;
