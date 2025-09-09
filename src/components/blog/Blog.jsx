import img1 from "../../assets/images/blog/1.png";
import img2 from "../../assets/images/blog/2.png";
import img3 from "../../assets/images/blog/3.png";
import img4 from "../../assets/images/blog/4.png";
import img5 from "../../assets/images/blog/5.png";
import img6 from "../../assets/images/blog/6.png";
import img7 from "../../assets/images/blog/7.png";
import img8 from "../../assets/images/blog/8.png";
import img9 from "../../assets/images/blog/9.png";
import img10 from "../../assets/images/blog/10.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "26 September, 2024",
    title: "Belajar Dasar Data Science",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "02 June, 2025",
    title: "Preparation Course for Azure AI Fundamentals AI900",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "20 August, 2025",
    title: "Machine Learning (Fresh Graduate Academy)",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "18 July, 2025",
    title: "Pengantar Machine Learning dengan Python",
    link: "#!",
  },
  {
    id: 5,
    image: img5,
    date: "18 September, 2025",
    title: "Sales Spike Business Case Overview",
    link: "#!",
  },
  {
    id: 6,
    image: img6,
    date: "02 September, 2025",
    title: "Spike SKU Feature Design",
    link: "#!",
  },
  {
    id: 7,
    image: img7,
    date: "2023 / 2024",
    title: "Lab Assistant for the course SD2104 Data Structures",
    link: "#!",
  },
  {
    id: 8,
    image: img8,
    date: "2023 / 2024",
    title: "Lab Assistant for the course SD2201 Function-Oriented Programming",
    link: "#!",
  },
  {
    id: 9,
    image: img9,
    date: "2024 / 2025",
    title: "Lab Assistant for the Big Data Analysis course",
    link: "#!",
  },
  {
    id: 10,
    image: img10,
    date: "2024 / 2025",
    title: "Lab Assistant for the Spatial Data Analysis course",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Licenses And Certifications</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          I believe that learning is a lifelong process. Here are some of the 
          certifications I've earned to expand my skills and knowledge.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
