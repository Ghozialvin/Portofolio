import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  // { icon: faFacebookF, link: "#!" },
  // { icon: faDribbble, link: "#!" },
  { icon: faInstagram, link: "https://www.instagram.com/gallvns__/" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/ghozi-alvin-934b14266/" },
  // { icon: faGithub, link: "https://github.com/Ghozialvin?tab=repositories" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-4xl w-12 h-12 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
