import { useState } from "react";

const About = () => {
  const [text] = useState("textState");

  return <div>about {text}</div>;
};

export default About;
