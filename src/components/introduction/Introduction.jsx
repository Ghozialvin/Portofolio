import person from "../../assets/images/2.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Machine Learning & Deep Learning",
    description: "Data Science",
  },
  {
    id: 2,
    title: "Power BI, Tableau, Python, R",
    description: "Data Analyst",
  },
  {
    id: 3,
    title: "ETL, PySpark, SQL, Big Data",
    description: "Data Engineering",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Ghozi Alvin Karim
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-justify">
            I'm interested in <span className="bg-highlight"> Data Science</span>{" "}
            , <span className="bg-highlight"> Machine Learning</span>{" "}
            , <span className="bg-highlight"> Deep Learning</span>{" "}
            , <span className="bg-highlight"> Business Analytics</span>{" "}
            , <span className="bg-highlight"> Data Engineering</span>{" "}
            and <span className="bg-highlight"> Data Analyst</span>{" "}.
            I have a strong passion for life and learning, and am determined to 
            become a dedicated individual who will contribute positively to society and the industry in the future.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:ghozialvin374@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-3 lg:mr-12">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
