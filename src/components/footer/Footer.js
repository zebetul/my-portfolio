import "./Footer.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { ABOUT_ME } from "../../constants/constants";

const Footer = () => {
  return (
    <footer className="footer intro_animation my-10 xl:fixed xl:bottom-0 xl:w-1/2 w-full mx-auto flex flex-col items-center">
      <h3 className="footer_container_title my-10 md:my-5">
        Let's work together:
      </h3>
      <ul className="footer_container_list flex flex-col md:flex-row items-center gap-10">
        <li className="footer_container_list_item">
          <a
            className="footer_link"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto: ${ABOUT_ME.contact.email}`}
          >
            <AiOutlineMail size={30} />
          </a>
        </li>

        <li className="footer_container_list_item">
          <a
            className="footer_link"
            target="_blank"
            rel="noopener noreferrer"
            href={ABOUT_ME.contact.linkedIn}
          >
            <AiFillLinkedin size={30} />
          </a>
        </li>

        <li className="footer_container_list_item">
          <a
            className="footer_link"
            target="_blank"
            rel="noopener noreferrer"
            href={ABOUT_ME.contact.github}
          >
            <AiFillGithub size={30} />
          </a>
        </li>

        <li className="footer_container_list_item">
          <a
            className="footer_link"
            target="_blank"
            rel="noopener noreferrer"
            href={ABOUT_ME.contact.cv}
          >
            <FaAddressCard size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
