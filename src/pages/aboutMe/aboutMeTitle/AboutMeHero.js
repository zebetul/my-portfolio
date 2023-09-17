import { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/common/customLink/CustomLink";

const AboutMeHero = () => {
  const [isProjectsButtonHovered, setIsProjectsButtonHovered] = useState(false);

  return (
    <div className="flex flex-col w-full xl:h-full items-center xl:justify-center">
      <img
        className="max-w-xs h-auto rounded-md"
        src="https://rfs-user-images.s3.eu-north-1.amazonaws.com/userprofile-2/0.jpeg"
        alt="placeholder"
      />

      <h1>Title</h1>

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
