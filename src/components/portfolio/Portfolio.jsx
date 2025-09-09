import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/1.png";
import card2 from "../../assets/images/portfolio-images/2.png";
import card3 from "../../assets/images/portfolio-images/3.png";
import card4 from "../../assets/images/portfolio-images/4.png";
import card5 from "../../assets/images/portfolio-images/5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Deep Learning, Object Detection & Computer Vision",
    title: "Beach Waste Detection",
    description:
      "Developed an object detection model using Detectron2 to identify and classify plastic waste on beaches for environmental monitoring.",
    link: "https://github.com/Ghozialvin/Beach-Litter-With-Detector2",
  },
  {
    id: 2,
    image: card2,
    category: "Machine Learning & Clustering",
    title: "Hotspot Clustering with DBSCAN",
    description:
      "Implemented DBSCAN algorithm to cluster forest fire hotspot data in Sumatra, improving early fire detection and mitigation.",
    link: "https://github.com/Ghozialvin/Clustering-Hotspot-With-DBSCAN",
  },
  {
    id: 3,
    image: card3,
    category: "Machine Learning, Computer Vision & UI Automation",
    title: "AI Form Correction",
    description:
      "Created a smart form validation system using machine learning and ProtoPie to auto-detect and correct user input errors in real-time.",
    link: "https://github.com/Ghozialvin/ENDURA",
  },
  {
    id: 4,
    image: card4,
    category: "Visualization & Dashboard",
    title: "Interactive Dashboard",
    description:
      "Built an interactive prototype dashboard using HTML, CSS, and JavaScript to visualize CSV data in a clear and user-friendly way.",
    link: "https://github.com/Ghozialvin/dashboard",
  },
  {
    id: 5,
    image: card5,
    category: "Machine Learning, Clustering, Visualization & Dashboard",
    title: "Clustering with ST-DBSCAN Deployment",
    description:
      "Developed a web-based application using ST-DBSCAN to analyze and cluster forest fire hotspot data in South Sumatra, with interactive visualization and parameter optimization.",
    link: "https://github.com/Ghozialvin/Deploy-ST-DBSCAN",
  },
  // {
  //   id: 6,
  //   image: card6,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
  //   link: "#!",
  // },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">My Project</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
           Discover my portfolio of projects that emphasize user-centered design, 
           technical precision, and creative problem-solving
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Next Update More Project..
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
