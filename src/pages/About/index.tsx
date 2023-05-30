import { countAtom } from "@/store";
import { useMemoizedFn } from "ahooks";
import { Button } from "antd";
import { useAtom } from "jotai";

const useCount = () => {
  const [count, setCount] = useAtom(countAtom);

  const handleIncrease = useMemoizedFn((value = 1) => setCount(count + value));
  const handleDecrease = useMemoizedFn((value = 1) => setCount(count - value));

  return {
    count,
    handleIncrease,
    handleDecrease,
  };
};

const About = () => {
  const { count, handleIncrease, handleDecrease } = useCount();

  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => handleIncrease()}>+</Button>
      <Button onClick={() => handleDecrease()}>-</Button>
    </div>
  );
};

export default About;
