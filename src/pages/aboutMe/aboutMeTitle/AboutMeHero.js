import { useState } from "react";
import { Link } from "react-router-dom";
import { ABOUT_ME } from "../../../constants/constants";
import CustomLink from "../../../components/common/customLink/CustomLink";

const AboutMeHero = () => {
  const [isProjectsButtonHovered, setIsProjectsButtonHovered] = useState(false);

  return (
    <div className="flex flex-col w-full xl:h-full items-center xl:justify-center gap-10">
      <img
        className="mt-2 max-w-xs h-auto rounded-md"
        src={ABOUT_ME.image}
        alt="hero_image"
      />

      <Link to="/">
        <CustomLink
          textContent={"projects"}
          isHovered={isProjectsButtonHovered}
          arrow={"left"}
          onMouseEnter={() => setIsProjectsButtonHovered(true)}
          onMouseLeave={() => setIsProjectsButtonHovered(false)}
        />
      </Link>
    </div>
  );
};
export default AboutMeHero;
