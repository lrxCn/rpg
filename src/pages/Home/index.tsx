import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateTo = useNavigate();

  const navTo = (path: string) => () => navigateTo(path);

  return <div onClick={navTo("/about")}>home</div>;
};

export default Home;
