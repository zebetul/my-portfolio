import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer my-10 xl:fixed xl:bottom-0 xl:right-1/2 xl:max-w-lg w-full flex flex-col items-center">
      <h3 className="footer_container_title my-5">Let's work together:</h3>
      <ul className="footer_container_list flex flex-col md:flex-row items-center gap-5">
        <li className="footer_container_list_item">
          <a href="mailto: sebenicristi@gmail.com">
            <AiOutlineMail size={30} />
          </a>
        </li>

        <li className="footer_container_list_item">
          <a href="https://www.linkedin.com/in/cristian-sebeni-79515926b/">
            <AiFillLinkedin size={30} />
          </a>
        </li>

        <li className="footer_container_list_item">
          <a href="https://github.com/zebetul">
            <AiFillGithub size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
