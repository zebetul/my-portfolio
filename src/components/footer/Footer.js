import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { ABOUT_ME } from "../../constants/constants";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (location.pathname === "/cv") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location.pathname]);

  if (!showFooter) return null;

  return (
    <footer className="footer intro_animation my-10 xl:fixed xl:bottom-0 xl:w-1/2 w-full mx-auto flex flex-col items-center">
      <h3 className="footer_container_title my-10 md:my-5">
        Let's work together:
      </h3>
      <ul className="footer_container_list flex flex-col md:flex-row items-center gap-10 text-accent">
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
          <Link className="footer_link" to="/cv">
            <FaAddressCard size={30} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
