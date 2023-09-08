import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home Page</h1>

      <Link to="/about_me">About Me</Link>

      <Link to="/project_1">Project 1.</Link>

      <Link to="/project_2">Project 2.</Link>

      <Link to="/project_3">Project 3.</Link>

      <Link to="/project_4">Project 4.</Link>
    </div>
  );
};
export default HomePage;
