import { useEffect } from "react";

function useTitle(num) {
  useEffect(() => {
    document.title = `Sayı ${num}`;
  }, [num]);
  return <div></div>;
}

export default useTitle;
