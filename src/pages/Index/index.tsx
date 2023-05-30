import { config } from "@/router/index";
import { useRoutes } from "react-router-dom";

const App = () => {
  const element = useRoutes(config);
  return <>{element}</>;
};

export default App;
