import { useState } from "react";
import useTitle from "./useTitle";

function TitleOne() {
  const [num, setNum] = useState(0);

  useTitle(num);
  //   useEffect(() => {
  //     document.title = `Sayı ${num}`;
  //   }, [num]);

  return <button onClick={() => setNum(num + 1)}>Sayı: {num}</button>;
}

export default TitleOne;
