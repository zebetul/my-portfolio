import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex sticky top-0 left-0 w-full h-10 z-10">
      <button
        className={`md:hidden ${showMenu ? "hidden" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <AiOutlineMenu size={30} />
      </button>

      <button
        className={`md:hidden absolute right-0 ${showMenu ? "" : "hidden"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <AiOutlineClose size={30} />
      </button>

      <ul
        className={`absolute md:relative md:ml-auto md:flex md:flex-row gap-5 ${
          showMenu ? "block" : "hidden"
        }
      `}
      >
        <li>
          <NavLink
            className="no-underline"
            onClick={() => setShowMenu(false)}
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="no-underline"
            onClick={() => setShowMenu(false)}
            to="/about_me"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            className="no-underline"
            onClick={() => setShowMenu(false)}
            to="/restil"
          >
            Project 1
          </NavLink>
        </li>

        <li>
          <NavLink
            className="no-underline"
            onClick={() => setShowMenu(false)}
            to="/flex"
          >
            Project 2
          </NavLink>
        </li>

        <li>
          <NavLink
            className="no-underline"
            onClick={() => setShowMenu(false)}
            to="/just_tripppin"
          >
            Project 3
          </NavLink>
        </li>

        <li>
          <NavLink
            className="no-underline"
            onClick={() => setShowMenu(false)}
            to="/pdf_form_filler"
          >
            Project 4
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
