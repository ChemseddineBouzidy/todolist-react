import React, { createContext, useState } from "react";
import Card from "../components/Card";

export const AppContext = createContext({
  isDarkMode : false
});

const Cards = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  const styles = {
    container: `${
      isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    } min-h-screen transition duration-300`,
    button:
      "absolute top-6 right-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
    wrapper: "flex flex-wrap justify-center  gap-6 p-8",
  };
  return (
    <AppContext.Provider value={{ isDarkMode }}>
      <div className={styles.container}>
        <button onClick={handleToggleDarkMode} className={styles.button}>
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>

        <div className={styles.wrapper}>
          <Card
            title="Web Development"
            description="Build responsive and dynamic websites using modern tech stacks."
            imageUrl="https://f.hellowork.com/obs-static-images/seo/ObsJob/developpeur-web.jpg"
          />
          <Card
            title="Graphic Design"
            description="Create stunning visuals that communicate your brand."
            imageUrl="https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs="
          />
          <Card
            title="SEO Optimization"
            description="Boost your visibility and reach your target audience effectively."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPagxibrb6b0fS15QYqAiV348cos8WgPJ4fQ&s"
          />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Cards;
